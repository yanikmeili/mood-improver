import type { Tag } from "../data/quotes";

const STORAGE_KEY = "mood-improver:history:v1";
const RETENTION_DAYS = 90;
const RECAP_WINDOW_DAYS = 30;
const UNLOCK_THRESHOLD = 15;

export type Action = "another" | "doesnt_fit" | "back";

export interface HistoryEntry {
  timestamp: string;         // ISO 8601 — the moment this specific quote was shown
  sessionId: string;         // shared across all quotes shown for one submitted input
  isInitial: boolean;        // true for the first quote of a session, false for siblings via Another/Doesn't fit
  input: string;             // user's raw mood text (identical for siblings in a session)
  matchedTags: Tag[];        // tags scored by the matcher (identical for siblings)
  quoteId: number;           // the quote displayed
  action: Action | null;     // what the user did from this quote view; null if no action yet
}

export type History = HistoryEntry[];

function read(): History {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(history: History): void {
  // Purge entries older than the retention window on every write.
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 3600 * 1000;
  const pruned = history.filter((e) => {
    const t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pruned));
  } catch {
    // localStorage disabled or quota exceeded — silently degrade.
  }
}

export function getHistory(): History {
  return read();
}

export function logQuoteShown(args: {
  sessionId: string;
  isInitial: boolean;
  input: string;
  matchedTags: Tag[];
  quoteId: number;
}): void {
  const entry: HistoryEntry = {
    timestamp: new Date().toISOString(),
    sessionId: args.sessionId,
    isInitial: args.isInitial,
    input: args.input,
    matchedTags: args.matchedTags,
    quoteId: args.quoteId,
    action: null,
  };
  const history = read();
  history.push(entry);
  write(history);
}

export function markAction(
  sessionId: string,
  quoteId: number,
  action: Action,
): void {
  const history = read();
  // Most recent matching entry with no action set yet.
  for (let i = history.length - 1; i >= 0; i--) {
    const e = history[i];
    if (e.sessionId === sessionId && e.quoteId === quoteId && e.action === null) {
      history[i] = { ...e, action };
      write(history);
      return;
    }
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function generateSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

// ── Recap aggregations ──────────────────────────────────────────────

export const UNLOCK_AFTER = UNLOCK_THRESHOLD;
export const RECAP_DAYS = RECAP_WINDOW_DAYS;

export interface Recap {
  unlocked: boolean;
  topWords: string[];                                  // up to 12, freq-ordered, no counts shown
  topTags: Tag[];                                      // freq-ordered, no counts shown
  repeatedQuoteIds: number[];                          // quotes seen >1 time, up to 5
  rejectedQuoteIds: number[];                          // quotes rejected, up to 5
  rejectedTotal: number;                               // total rejection events (for >1 gate)
}

// Trilingual stopword list. Kept small and obvious — better to leak a few
// filler words than to filter emotional content like "love" or "saudade".
const STOPWORDS = new Set<string>([
  // EN
  "the", "and", "for", "are", "you", "your", "yours", "with", "this", "that",
  "have", "has", "had", "was", "were", "but", "not", "from", "they", "them",
  "their", "what", "when", "where", "who", "why", "how", "all", "any", "can",
  "could", "should", "would", "will", "just", "very", "really", "too", "also",
  "into", "out", "about", "than", "then", "there", "here", "some", "much",
  "more", "less", "like", "only", "even", "still", "yet", "been", "being",
  "does", "did", "doing", "feel", "feels", "felt", "feeling", "today",
  "now", "im", "ive", "don", "dont", "doesn", "isnt", "arent", "wasnt",
  "werent", "havent", "hasnt", "didnt", "wont", "wouldnt", "couldnt",
  "shouldnt", "way", "thing", "things",
  // FR
  "les", "des", "une", "ces", "mes", "tes", "ses", "nos", "vos", "leur",
  "leurs", "qui", "que", "quoi", "dont", "comme", "pour", "par", "sur",
  "dans", "avec", "sans", "sous", "vers", "chez", "est", "sont", "suis",
  "ait", "aie", "avons", "avez", "ont", "été", "etre", "avoir",
  "fait", "faire", "elle", "elles", "ils", "lui", "nous", "vous", "moi",
  "toi", "soi", "mon", "ton", "son", "cet", "cette", "tout", "tous",
  "toute", "toutes", "très", "tres", "trop", "bien", "peu", "plus",
  "moins", "même", "meme", "encore", "déjà", "deja", "aussi", "donc",
  "alors", "mais", "car", "où", "quand", "parce", "pas", "rien", "jamais",
  "personne", "aucun", "aucune", "oui", "non", "aujourd", "hui", "qu",
  // PT
  "uns", "umas", "dos", "das", "pelo", "pela", "pelos", "pelas",
  "isto", "isso", "aquilo", "este", "esta", "esse", "essa", "aquele",
  "aquela", "estes", "estas", "esses", "essas", "aqueles", "aquelas",
  "meu", "minha", "meus", "minhas", "teu", "tua", "teus", "tuas",
  "seu", "sua", "seus", "suas", "nosso", "nossa", "nossos", "nossas",
  "vosso", "vossa", "vossos", "vossas", "para", "por", "com", "sem",
  "sob", "sobre", "entre", "contra", "até", "ate", "ele", "ela", "eles",
  "elas", "lhe", "lhes", "qual", "quem", "como", "quando", "onde",
  "porque", "porque", "sim", "nao", "muito", "muita", "muitos", "muitas",
  "todo", "toda", "todos", "todas", "algum", "alguma", "alguns", "algumas",
  "nenhum", "nenhuma", "outro", "outra", "outros", "outras", "mesmo",
  "mesma", "tudo", "hoje", "estou", "está", "esta",
]);

function tokenizeInput(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[.,;:!?"()\[\]{}«»—–…]/g, " ")
    .replace(/'/g, " ") // split on apostrophes so j'ai → j + ai (length filter drops singles)
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

export function computeRecap(history: History): Recap {
  const cutoff = Date.now() - RECAP_WINDOW_DAYS * 24 * 3600 * 1000;
  const recent = history.filter((e) => new Date(e.timestamp).getTime() >= cutoff);
  const unlocked = recent.length >= UNLOCK_THRESHOLD;

  if (!unlocked) {
    return {
      unlocked: false,
      topWords: [],
      topTags: [],
      repeatedQuoteIds: [],
      rejectedQuoteIds: [],
      rejectedTotal: 0,
    };
  }

  // Word & tag counts only from initial entries — siblings via Another/Doesn't fit
  // share the same input and matched tags, so counting them would multiply a
  // single creative act.
  const wordCounts = new Map<string, number>();
  const tagCounts = new Map<Tag, number>();
  for (const e of recent) {
    if (!e.isInitial) continue;
    for (const w of tokenizeInput(e.input)) {
      wordCounts.set(w, (wordCounts.get(w) ?? 0) + 1);
    }
    for (const t of e.matchedTags) {
      tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
    }
  }
  const topWords = [...wordCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([w]) => w);
  const topTags = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([t]) => t);

  // Repeated quotes: counted across all entries (each entry = one quote display).
  const quoteCounts = new Map<number, number>();
  for (const e of recent) {
    quoteCounts.set(e.quoteId, (quoteCounts.get(e.quoteId) ?? 0) + 1);
  }
  const repeatedQuoteIds = [...quoteCounts.entries()]
    .filter(([, c]) => c > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id);

  // Rejected quotes
  const rejectCounts = new Map<number, number>();
  let rejectedTotal = 0;
  for (const e of recent) {
    if (e.action === "doesnt_fit") {
      rejectCounts.set(e.quoteId, (rejectCounts.get(e.quoteId) ?? 0) + 1);
      rejectedTotal++;
    }
  }
  const rejectedQuoteIds = [...rejectCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id);

  return {
    unlocked: true,
    topWords,
    topTags,
    repeatedQuoteIds,
    rejectedQuoteIds,
    rejectedTotal,
  };
}
