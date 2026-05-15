import { quotes, type Quote, type Tag, ALL_TAGS } from "../data/quotes";

// Keyword lexicon. Multi-word phrases are matched as substrings on the
// normalized input; single tokens are matched against whitespace-split tokens.
const LEXICON: Record<Tag, string[]> = {
  exhaustion: [
    "tired", "exhausted", "drained", "wiped", "spent", "depleted",
    "burnt out", "burned out", "burnout", "no energy", "running on empty",
    "worn out", "fatigued",
  ],
  melancholy: [
    "sad", "down", "blue", "gloomy", "low", "heavy", "depressed", "depression",
    "melancholy", "dejected", "miserable", "unhappy", "sorrowful",
  ],
  tenderness: [
    "love", "loved", "loving", "grateful", "thankful", "tender", "soft",
    "warm", "kind", "gentle", "affection", "miss someone", "miss him",
    "miss her", "miss them",
  ],
  loneliness: [
    "lonely", "alone", "isolated", "disconnected", "nobody", "no one",
    "by myself", "left out", "abandoned",
  ],
  fear: [
    "afraid", "scared", "anxious", "anxiety", "worried", "worry", "panic",
    "dread", "terrified", "nervous", "fear", "fearful", "spooked",
  ],
  emptiness: [
    "empty", "numb", "hollow", "blank", "nothing matters", "pointless",
    "meaningless", "void", "nothing", "no point",
  ],
  grief: [
    "grief", "grieving", "mourning", "lost someone", "she died", "he died",
    "they died", "passed away", "breakup", "broke up", "dumped", "loss",
    "heartbroken",
  ],
  absurdity: [
    "absurd", "ridiculous", "what's the point", "whats the point", "weird",
    "nonsense", "makes no sense", "joke",
  ],
  longing: [
    "miss", "missing", "yearning", "yearn", "wish", "if only", "want",
    "wanting", "nostalgia", "nostalgic", "homesick",
  ],
  defiance: [
    "angry", "pissed", "furious", "rage", "raging", "frustrated", "frustration",
    "fed up", "sick of", "tired of", "had enough", "mad", "annoyed",
  ],
  courage: [
    "scared but", "going to do it", "facing", "showing up", "brave",
    "courage", "courageous", "stepping up", "trying anyway",
  ],
  wonder: [
    "beautiful", "amazed", "amazing", "alive", "in awe", "astonished",
    "astonishing", "marvelous", "miracle", "magical",
  ],
  lucidity: [
    "confused", "doubt", "uncertain", "questioning", "stuck", "who am i",
    "what am i doing", "lost", "directionless", "unclear",
  ],
  acceptance: [
    "okay", "ok", "fine", "at peace", "calm", "settled", "letting go",
    "let go", "acceptance", "accepting", "content",
  ],
};

// Adjacency map: when "Doesn't fit" exhausts the matched tags, we widen the
// search to emotionally adjacent ones rather than going random immediately.
const ADJACENT: Record<Tag, Tag[]> = {
  melancholy: ["grief", "emptiness", "loneliness"],
  emptiness: ["melancholy", "absurdity", "exhaustion"],
  grief: ["melancholy", "longing", "loneliness", "tenderness"],
  exhaustion: ["melancholy", "emptiness", "defiance"],
  fear: ["courage", "lucidity"],
  loneliness: ["longing", "melancholy", "tenderness"],
  longing: ["grief", "loneliness", "tenderness"],
  defiance: ["courage", "exhaustion"],
  courage: ["fear", "defiance"],
  absurdity: ["emptiness", "lucidity"],
  lucidity: ["acceptance", "fear", "absurdity"],
  acceptance: ["lucidity", "tenderness", "wonder"],
  tenderness: ["acceptance", "longing", "wonder"],
  wonder: ["tenderness", "acceptance"],
};

function normalize(input: string): string {
  return input.toLowerCase().replace(/[^\w\s']/g, " ").replace(/\s+/g, " ").trim();
}

// Split into clauses on conjunctions / punctuation so we can detect negation
// in a localized way.
function splitClauses(normalized: string): string[] {
  return normalized
    .split(/\s+(?:but|however|although|though|yet)\s+|[,.;]+/)
    .map((c) => c.trim())
    .filter(Boolean);
}

const NEGATORS = ["not", "no", "never", "n't", "nothing", "nobody"];

function isNegated(clause: string): boolean {
  const tokens = clause.split(/\s+/);
  return tokens.some((t) => NEGATORS.includes(t)) || /\bn't\b/.test(clause);
}

function clauseMatchesPhrase(clause: string, phrase: string): boolean {
  if (phrase.includes(" ")) {
    return clause.includes(phrase);
  }
  // Word-boundary match for single tokens
  const re = new RegExp(`\\b${phrase}\\b`);
  return re.test(clause);
}

export interface MatchResult {
  scoredTags: Tag[];        // tags ordered by descending hit count
  scores: Partial<Record<Tag, number>>;
}

export function matchTags(input: string): MatchResult {
  const normalized = normalize(input);
  const clauses = splitClauses(normalized);
  const scores: Partial<Record<Tag, number>> = {};

  for (const clause of clauses) {
    if (isNegated(clause)) continue; // drop negated clauses entirely
    for (const tag of ALL_TAGS) {
      for (const phrase of LEXICON[tag]) {
        if (clauseMatchesPhrase(clause, phrase)) {
          scores[tag] = (scores[tag] ?? 0) + 1;
          break; // count tag at most once per clause
        }
      }
    }
  }

  const scoredTags = (Object.keys(scores) as Tag[]).sort(
    (a, b) => (scores[b] ?? 0) - (scores[a] ?? 0),
  );
  return { scoredTags, scores };
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export interface SelectOptions {
  excludedIds?: number[];
  excludedTags?: Tag[];
}

export interface Selection {
  quote: Quote;
  matchedTags: Tag[];        // tags that drove the selection
  fellBackToRandom: boolean; // true if we couldn't honor any tag
}

export function selectQuote(input: string, opts: SelectOptions = {}): Selection {
  const excludedIds = new Set(opts.excludedIds ?? []);
  const excludedTags = new Set(opts.excludedTags ?? []);
  const { scoredTags } = matchTags(input);

  const usableTags = scoredTags.filter((t) => !excludedTags.has(t));

  const available = (predicate: (q: Quote) => boolean) =>
    quotes.filter((q) => !excludedIds.has(q.id) && predicate(q));

  // 1. Intersection: quotes with ≥2 of the usable matched tags
  if (usableTags.length >= 2) {
    const intersection = available(
      (q) => q.tags.filter((t) => usableTags.includes(t)).length >= 2,
    );
    if (intersection.length > 0) {
      return { quote: pickRandom(intersection), matchedTags: usableTags, fellBackToRandom: false };
    }
  }

  // 2. Union: quotes with any usable matched tag
  if (usableTags.length >= 1) {
    const union = available((q) => q.tags.some((t) => usableTags.includes(t)));
    if (union.length > 0) {
      return { quote: pickRandom(union), matchedTags: usableTags, fellBackToRandom: false };
    }
  }

  // 3. Adjacency: widen to emotionally adjacent tags of the (excluded) scored
  //    tags. Useful for "Doesn't fit" when the user rejected all matched tags.
  if (scoredTags.length > 0) {
    const adjacent = new Set<Tag>();
    for (const t of scoredTags) {
      for (const a of ADJACENT[t]) {
        if (!excludedTags.has(a)) adjacent.add(a);
      }
    }
    if (adjacent.size > 0) {
      const fromAdjacent = available((q) => q.tags.some((t) => adjacent.has(t)));
      if (fromAdjacent.length > 0) {
        return {
          quote: pickRandom(fromAdjacent),
          matchedTags: Array.from(adjacent),
          fellBackToRandom: false,
        };
      }
    }
  }

  // 4. Random fallback (or quote-pool exhausted)
  const pool = quotes.filter((q) => !excludedIds.has(q.id));
  const finalPool = pool.length > 0 ? pool : quotes;
  return { quote: pickRandom(finalPool), matchedTags: [], fellBackToRandom: true };
}
