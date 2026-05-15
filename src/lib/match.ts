import { quotes, type Quote, type Tag, ALL_TAGS } from "../data/quotes";

// Multilingual keyword lexicon. EN + FR + PT keywords all map to the same
// emotional tags. The input language is irrelevant to selection — only the
// extracted tags drive the pick. Display language is the quote's `lang`.
//
// Conventions:
// - Multi-word phrases match as substrings on the normalized clause.
// - Single tokens match with word boundaries.
// - All forms are spelled out (singular/plural, masc/fem, conjugations) rather
//   than stemmed. Less elegant, more predictable.

const LEXICON: Record<Tag, string[]> = {
  exhaustion: [
    // EN
    "tired", "exhausted", "drained", "wiped", "spent", "depleted", "burnt out",
    "burned out", "burnout", "no energy", "running on empty", "worn out",
    "fatigued", "knackered", "beat", "i'm done", "can't anymore", "weary",
    // FR
    "fatigué", "fatiguée", "fatigués", "fatiguées", "fatigue",
    "crevé", "crevée", "crevés", "crevées",
    "épuisé", "épuisée", "épuisés", "épuisées", "épuisement",
    "vidé", "vidée", "vidés", "vidées",
    "lessivé", "lessivée", "claqué", "claquée", "à bout", "plus la force",
    "n'en peux plus", "ras le bol", "marre", "j'en peux plus",
    "raplapla", "vanné", "vannée", "lassé", "lassée",
    // PT
    "cansado", "cansada", "cansados", "cansadas", "cansaço",
    "exausto", "exausta", "exaustos", "exaustas", "exaustão",
    "esgotado", "esgotada", "esgotados", "esgotadas", "esgotamento",
    "sem energia", "acabado", "acabada", "farto", "farta", "fartos", "fartas",
    "estafado", "estafada", "moído", "moída",
  ],
  melancholy: [
    // EN
    "sad", "down", "blue", "gloomy", "low", "heavy", "depressed", "depression",
    "melancholy", "melancholic", "dejected", "miserable", "unhappy", "sorrowful",
    "feeling low", "the blues", "morose",
    // FR
    "triste", "tristes", "tristesse", "déprime", "déprimé", "déprimée",
    "déprimés", "déprimées", "abattu", "abattue", "morose", "moroses",
    "mélancolie", "mélancolique", "cafard", "ai le cafard", "broie du noir",
    "morne", "sombre", "spleen", "le moral à zéro", "mal", "ai du mal",
    "ai le moral à zéro",
    // PT
    "triste", "tristes", "tristeza", "deprimido", "deprimida", "deprimidos",
    "deprimidas", "depressão", "abatido", "abatida", "melancolia", "melancólico",
    "melancólica", "fossa", "na fossa", "infeliz", "infelizes", "sombrio",
    "sombria", "saudoso", "saudosa",
  ],
  tenderness: [
    // EN
    "love", "loved", "loving", "in love", "grateful", "gratitude", "thankful",
    "tender", "tenderness", "soft", "warm", "kind", "gentle", "affection",
    "affectionate", "miss someone", "miss him", "miss her", "miss them",
    "i love", "i cherish", "cherish",
    // FR
    "amour", "amoureux", "amoureuse", "amoureusement", "j'aime", "tu aimes",
    "aime", "aimer", "aimé", "aimée", "aimés", "aimées",
    "tendresse", "tendre", "tendres", "doux", "douce", "douceur",
    "reconnaissant", "reconnaissante", "reconnaissance", "gratitude",
    "chéri", "chérie", "affection", "affectueux", "affectueuse",
    "gentil", "gentille", "bienveillant", "bienveillante",
    // PT
    "amor", "amores", "amo", "amas", "ama", "amamos", "amam", "amando",
    "amado", "amada", "amados", "amadas",
    "ternura", "terno", "terna", "carinho", "carinhoso", "carinhosa",
    "afeto", "afeição", "querido", "querida", "grato", "grata", "gratidão",
    "agradecido", "agradecida", "doce", "doces",
  ],
  loneliness: [
    // EN
    "lonely", "alone", "isolated", "disconnected", "nobody", "no one",
    "by myself", "left out", "abandoned", "feel alone", "no friends",
    "estranged", "outsider",
    // FR
    "seul", "seule", "seuls", "seules", "solitude", "solitaire", "solitaires",
    "isolé", "isolée", "isolés", "isolées", "isolement",
    "personne ne", "personne pour", "abandonné", "abandonnée",
    "tout seul", "toute seule", "loin de tout", "déconnecté", "déconnectée",
    // PT
    "sozinho", "sozinha", "sozinhos", "sozinhas", "solidão", "solitário",
    "solitária", "isolado", "isolada", "abandonado", "abandonada",
    "ninguém", "ninguém para", "longe de tudo", "perdido na multidão",
    "estranho", "estranha",
  ],
  fear: [
    // EN
    "afraid", "scared", "anxious", "anxiety", "worried", "worry", "panic",
    "dread", "terrified", "nervous", "fear", "fearful", "spooked", "stressed",
    "stress", "freaking out", "on edge",
    // FR
    "peur", "peurs", "ai peur", "j'ai peur", "effrayé", "effrayée", "effrayés",
    "effrayées", "anxieux", "anxieuse", "anxiété", "angoisse", "angoissé",
    "angoissée", "stressé", "stressée", "stress", "inquiet", "inquiète",
    "inquiétude", "terrifié", "terrifiée", "trouille", "j'ai la trouille",
    "panique", "paniqué", "paniquée", "nerveux", "nerveuse",
    // PT
    "medo", "medos", "tenho medo", "com medo", "ansioso", "ansiosa",
    "ansiedade", "angústia", "angustiado", "angustiada", "preocupado",
    "preocupada", "preocupação", "estressado", "estressada", "estresse",
    "pânico", "aterrorizado", "aterrorizada", "nervoso", "nervosa",
    "apavorado", "apavorada",
  ],
  emptiness: [
    // EN
    "empty", "numb", "hollow", "blank", "nothing matters", "pointless",
    "meaningless", "void", "no point", "nothing inside", "feel nothing",
    "feel empty", "vacant",
    // FR
    "vide", "vides", "vidé", "vidée", "rien à faire", "rien ne", "ne sers à",
    "à quoi bon", "ça sert à rien", "ça sert à quoi", "sens à rien",
    "engourdi", "engourdie", "anesthésié", "anesthésiée", "sans sens",
    "absurde de vivre", "envie de rien", "ai envie de rien",
    "ne ressens rien",
    // PT
    "vazio", "vazia", "vazios", "vazias", "oco", "oca",
    "nada faz sentido", "sem sentido", "para quê", "qual o sentido",
    "anestesiado", "anestesiada", "entorpecido", "entorpecida",
    "não sinto nada", "sem motivo",
  ],
  grief: [
    // EN
    "grief", "grieving", "mourning", "lost someone", "she died", "he died",
    "they died", "passed away", "breakup", "broke up", "dumped", "loss",
    "heartbroken", "broken heart", "mourn",
    // FR
    "deuil", "deuils", "endeuillé", "endeuillée", "mort", "morte", "décès",
    "décédé", "décédée", "perdu quelqu'un", "perdu un", "perdu une",
    "rupture", "séparation", "séparé", "séparée", "il m'a quitté",
    "elle m'a quitté", "largué", "larguée", "cœur brisé", "coeur brisé",
    "chagrin", "chagriné", "chagrinée", "peine",
    // PT
    "luto", "lutos", "enlutado", "enlutada", "morreu", "morte", "faleceu",
    "perdi alguém", "perdi um", "perdi uma", "separação", "separado",
    "separada", "rompimento", "terminamos", "coração partido",
    "coração quebrado", "mágoa", "magoado", "magoada",
  ],
  absurdity: [
    // EN
    "absurd", "ridiculous", "what's the point", "whats the point", "weird",
    "nonsense", "makes no sense", "joke", "farce", "this is stupid",
    // FR
    "absurde", "absurdes", "absurdité", "ridicule", "ridicules",
    "à quoi ça rime", "ça n'a aucun sens", "n'a pas de sens", "ne rime à rien",
    "c'est une blague", "c'est du grand n'importe quoi", "n'importe quoi",
    "loufoque",
    // PT
    "absurdo", "absurda", "absurdos", "ridículo", "ridícula",
    "qual o sentido", "não faz sentido", "uma piada", "sem nexo",
    "que loucura",
  ],
  longing: [
    // EN
    "miss", "missing", "yearning", "yearn", "wish", "if only", "want",
    "wanting", "nostalgia", "nostalgic", "homesick", "long for", "longing",
    "ache for",
    // FR
    "manque", "manques", "tu me manques", "il me manque", "elle me manque",
    "me manquent", "ça me manque", "nostalgie", "nostalgique", "regrette",
    "regretter", "envie de", "j'aimerais", "voudrais", "si seulement",
    "languir", "désir", "désirer", "rêve de",
    // PT
    "saudade", "saudades", "tenho saudade", "tenho saudades", "falta",
    "me faz falta", "sinto falta", "nostalgia", "nostálgico", "nostálgica",
    "queria", "quisera", "desejo", "desejar", "ânsia", "ansiar",
  ],
  defiance: [
    // EN
    "angry", "pissed", "furious", "rage", "raging", "frustrated", "frustration",
    "fed up", "sick of", "tired of", "had enough", "mad", "annoyed", "livid",
    "won't accept", "refuse",
    // FR
    "colère", "en colère", "furieux", "furieuse", "fâché", "fâchée",
    "frustré", "frustrée", "frustration", "énervé", "énervée", "énervement",
    "rage", "enragé", "enragée", "ras-le-bol", "j'en ai marre", "marre de",
    "agacé", "agacée", "exaspéré", "exaspérée", "remonté", "remontée",
    // PT
    "raiva", "com raiva", "irritado", "irritada", "irritação",
    "furioso", "furiosa", "fúria", "bravo", "brava", "puto", "puta",
    "indignado", "indignada", "indignação", "revoltado", "revoltada",
    "revolta", "estou farto", "estou farta", "saco cheio",
  ],
  courage: [
    // EN
    "scared but", "going to do it", "facing", "showing up", "brave", "courage",
    "courageous", "stepping up", "trying anyway", "doing it anyway",
    "i can do this",
    // FR
    "courage", "courageux", "courageuse", "j'y vais", "je vais le faire",
    "j'ose", "oser", "ose", "affronter", "affronte", "faire face",
    "tenir bon", "ne pas céder", "vaillant", "vaillante", "se battre",
    "je me bats",
    // PT
    "coragem", "corajoso", "corajosa", "vou tentar", "vou fazer", "enfrentar",
    "enfrento", "encarar", "encaro", "valente", "ousar", "ouso", "destemido",
    "destemida", "firmeza",
  ],
  wonder: [
    // EN
    "beautiful", "amazed", "amazing", "alive", "in awe", "astonished",
    "astonishing", "marvelous", "miracle", "magical", "wonder", "wondrous",
    "breathtaking",
    // FR
    "beau", "belle", "beaux", "belles", "beauté", "magnifique", "magnifiques",
    "émerveillé", "émerveillée", "émerveillement", "merveilleux",
    "merveilleuse", "miracle", "miraculeux", "miraculeuse", "magique",
    "stupéfait", "stupéfaite", "ébloui", "éblouie", "sublime",
    // PT
    "lindo", "linda", "lindos", "lindas", "beleza", "belo", "bela",
    "maravilhoso", "maravilhosa", "maravilha", "milagre", "milagroso",
    "milagrosa", "mágico", "mágica", "deslumbrado", "deslumbrada",
    "espantoso", "espantosa", "sublime",
  ],
  lucidity: [
    // EN
    "confused", "doubt", "uncertain", "questioning", "stuck", "who am i",
    "what am i doing", "lost", "directionless", "unclear", "perdu",
    "what's the meaning", "trying to understand",
    // FR
    "perdu", "perdue", "perdus", "perdues", "doute", "doutes", "je doute",
    "incertain", "incertaine", "confusion", "confus", "confuse", "questionne",
    "me questionne", "où je vais", "qui je suis", "ne sais plus",
    "ne sais pas", "comprends pas", "comprend pas",
    // PT
    "perdido", "perdida", "perdidos", "perdidas", "dúvida", "dúvidas",
    "incerto", "incerta", "confuso", "confusa", "confusão", "questiono",
    "me questiono", "quem sou", "não sei mais", "não entendo",
  ],
  acceptance: [
    // EN
    "okay", "ok", "fine", "at peace", "calm", "settled", "letting go",
    "let go", "acceptance", "accepting", "content", "alright", "at ease",
    "i'm good", "feeling good",
    // FR
    "bien", "ça va", "tranquille", "tranquilles", "paisible", "paisibles",
    "serein", "sereine", "sérénité", "en paix", "lâcher prise", "j'accepte",
    "accepter", "calme", "calmes", "apaisé", "apaisée", "réconcilié",
    "réconciliée", "ça va bien",
    // PT
    "tranquilo", "tranquila", "tranquilos", "tranquilas", "em paz",
    "sereno", "serena", "serenidade", "calmo", "calma", "aceito",
    "aceitar", "aceitação", "estou bem", "tudo bem", "deixar ir",
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
  return input
    .toLowerCase()
    // Keep apostrophes and accented characters (FR/PT need them)
    .replace(/[.,;:!?"()\[\]{}«»—–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Split into clauses on conjunctions / punctuation so we can detect negation
// locally rather than over the whole input.
const CLAUSE_SEPARATORS = [
  // EN
  "but", "however", "although", "though", "yet",
  // FR
  "mais", "cependant", "pourtant", "néanmoins", "toutefois",
  // PT
  "mas", "porém", "contudo", "todavia", "entretanto",
];

function splitClauses(normalized: string): string[] {
  const pattern = new RegExp(`\\s+(?:${CLAUSE_SEPARATORS.join("|")})\\s+`, "g");
  return normalized
    .split(pattern)
    .map((c) => c.trim())
    .filter(Boolean);
}

// Negation cues per language.
const NEGATION_TOKENS = new Set([
  // EN
  "not", "no", "never", "nothing", "nobody", "none",
  // FR
  "ne", "pas", "plus", "jamais", "rien", "personne", "aucun", "aucune",
  "point", "ni", "non",
  // PT
  "não", "nao", "nunca", "nada", "ninguém", "ninguem", "nem", "jamais",
]);

function isNegated(clause: string): boolean {
  if (/\bn't\b/.test(clause)) return true;
  const tokens = clause.split(/\s+/);
  return tokens.some((t) => NEGATION_TOKENS.has(t));
}

function clauseMatchesPhrase(clause: string, phrase: string): boolean {
  if (phrase.includes(" ") || /[''-]/.test(phrase)) {
    // Multi-word or contracted phrases: substring match
    return clause.includes(phrase);
  }
  // Word-boundary match for single tokens. \b doesn't play well with accented
  // chars in JS regex, so we use a manual boundary check.
  const idx = clause.indexOf(phrase);
  if (idx === -1) return false;
  const before = idx === 0 ? " " : clause[idx - 1];
  const after = idx + phrase.length >= clause.length ? " " : clause[idx + phrase.length];
  const isWordChar = (c: string) => /[\p{L}\p{N}]/u.test(c);
  return !isWordChar(before) && !isWordChar(after);
}

export interface MatchResult {
  scoredTags: Tag[];
  scores: Partial<Record<Tag, number>>;
}

export function matchTags(input: string): MatchResult {
  const normalized = normalize(input);
  const clauses = splitClauses(normalized);
  const scores: Partial<Record<Tag, number>> = {};

  for (const clause of clauses) {
    if (isNegated(clause)) continue;
    for (const tag of ALL_TAGS) {
      // Sort longer phrases first so multi-word patterns win over single words
      const phrases = [...LEXICON[tag]].sort((a, b) => b.length - a.length);
      for (const phrase of phrases) {
        if (clauseMatchesPhrase(clause, phrase)) {
          scores[tag] = (scores[tag] ?? 0) + 1;
          break;
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
  matchedTags: Tag[];
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
      return { quote: pickRandom(intersection), matchedTags: usableTags };
    }
  }

  // 2. Union: quotes with any usable matched tag
  if (usableTags.length >= 1) {
    const union = available((q) => q.tags.some((t) => usableTags.includes(t)));
    if (union.length > 0) {
      return { quote: pickRandom(union), matchedTags: usableTags };
    }
  }

  // 3. Adjacency: widen to emotionally adjacent tags of the scored tags.
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
        return { quote: pickRandom(fromAdjacent), matchedTags: Array.from(adjacent) };
      }
    }
  }

  // 4. Silent random fallback
  const pool = quotes.filter((q) => !excludedIds.has(q.id));
  const finalPool = pool.length > 0 ? pool : quotes;
  return { quote: pickRandom(finalPool), matchedTags: [] };
}
