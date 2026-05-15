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
// - Longer phrases are tried first within a tag, so idioms like
//   "j'en peux plus" (exhaustion) win before "plus" alone could be read.

const LEXICON: Record<Tag, string[]> = {
  exhaustion: [
    // EN
    "tired", "exhausted", "drained", "wiped", "spent", "depleted", "burnt out",
    "burned out", "burnout", "no energy", "running on empty", "worn out",
    "fatigued", "knackered", "beat", "i'm done", "can't anymore", "weary",
    "dead tired", "dog tired", "pooped", "zonked", "frazzled", "bone tired",
    "dead on my feet", "sluggish", "lethargic", "listless", "gassed", "run down",
    "beat down", "bushed", "rough day", "rough week", "long day", "long week",
    "fried", "shattered", "wrecked", "no fuel", "no gas", "running on fumes",
    "completely done", "i'm cooked", "cooked",
    // FR
    "fatigué", "fatiguée", "fatigués", "fatiguées", "fatigue",
    "crevé", "crevée", "crevés", "crevées",
    "épuisé", "épuisée", "épuisés", "épuisées", "épuisement",
    "vidé", "vidée", "vidés", "vidées",
    "lessivé", "lessivée", "claqué", "claquée", "à bout", "plus la force",
    "n'en peux plus", "j'en peux plus", "j'en peux plus là", "ras le bol",
    "marre", "raplapla", "vanné", "vannée", "lassé", "lassée",
    "mort de fatigue", "morte de fatigue", "à plat", "sur les rotules",
    "naze", "nazé", "rincé", "rincée", "esquinté", "esquintée",
    "harassé", "harassée", "exténué", "exténuée", "complètement nase",
    "plus d'énergie", "j'ai plus d'énergie", "je tiens plus debout",
    "je tombe de sommeil", "à terre", "dans le brouillard",
    "journée éprouvante", "semaine éprouvante", "j'en peux plus de rien",
    // PT
    "cansado", "cansada", "cansados", "cansadas", "cansaço",
    "exausto", "exausta", "exaustos", "exaustas", "exaustão",
    "esgotado", "esgotada", "esgotados", "esgotadas", "esgotamento",
    "sem energia", "acabado", "acabada", "farto", "farta", "fartos", "fartas",
    "estafado", "estafada", "moído", "moída",
    "morto de cansaço", "morta de cansaço", "no limite", "sem forças",
    "no chão", "derrubado", "derrubada", "com sono", "sem pique",
    "sem ânimo", "mole", "arrastando", "arrastada", "capengando",
    "tô morrendo de cansaço", "tô zerado", "tô zerada", "tô moído",
    "tô moída", "tô passado", "tô passada", "tô acabado", "tô acabada",
    "dia puxado", "semana puxada", "tô só o pó",
  ],
  melancholy: [
    // EN
    "sad", "down", "blue", "gloomy", "low", "heavy", "depressed", "depression",
    "melancholy", "melancholic", "dejected", "miserable", "unhappy", "sorrowful",
    "feeling low", "the blues", "morose", "glum", "down in the dumps",
    "brokenhearted", "somber", "mopey", "mournful", "in a funk", "in the pits",
    "droopy", "woeful", "dismal", "dispirited", "bummed", "bummed out",
    "in a bad place", "down in the mouth", "hangdog", "downcast", "crestfallen",
    "deflated", "blue mood", "got the blues", "feeling sad", "feeling down",
    "feeling blue", "off", "feeling off", "out of sorts", "not okay",
    "not ok", "not great", "not well", "blah", "meh", "ugh", "low mood",
    "in my feelings", "in my feels", "in a mood",
    // FR
    "triste", "tristes", "tristesse", "déprime", "déprimé", "déprimée",
    "déprimés", "déprimées", "abattu", "abattue", "morose", "moroses",
    "mélancolie", "mélancolique", "cafard", "j'ai le cafard", "ai le cafard",
    "broie du noir", "morne", "sombre", "spleen", "le moral à zéro",
    "j'ai pas le moral", "ai pas le moral", "ai le moral à zéro",
    "j'ai un coup de blues", "le blues", "ai le blues",
    "peine de cœur", "le moral en berne", "moral dans les chaussettes",
    "désespéré", "désespérée", "désespoir", "abattement", "accablé", "accablée",
    "démoralisé", "démoralisée", "sans entrain", "lugubre",
    "j'ai le bourdon", "le bourdon", "chagrin", "j'ai du chagrin",
    "j'ai mal au cœur", "ai mal au cœur", "ça va pas fort", "ça va pas",
    "ça va mal", "le cœur lourd", "cœur lourd", "j'ai un poids",
    "ai un poids sur le cœur", "à fleur de peau",
    "ne pas avoir le moral", "morfondu", "morfondue",
    // PT
    "triste", "tristes", "tristeza", "deprimido", "deprimida", "deprimidos",
    "deprimidas", "depressão", "abatido", "abatida", "melancolia", "melancólico",
    "melancólica", "fossa", "na fossa", "infeliz", "infelizes", "sombrio",
    "sombria", "desanimado", "desanimada", "desânimo", "desolado", "desolada",
    "prostrado", "prostrada", "na pior", "tô na pior", "estou na pior",
    "mal humorado", "mal-humorado", "mal-humorada", "taciturno", "taciturna",
    "baqueado", "baqueada", "no fundo do poço", "tô na merda", "tô mal",
    "tô triste", "tô para baixo", "tô pra baixo", "tô péssimo", "tô péssima",
    "tristonho", "tristonha", "tô deprimido", "tô deprimida",
    "estou para baixo", "coração apertado", "coração pesado",
    "estou de mau humor", "de mau humor", "azedo", "azeda",
  ],
  tenderness: [
    // EN
    "love", "loved", "loving", "in love", "grateful", "gratitude", "thankful",
    "tender", "tenderness", "soft", "warm", "kind", "gentle", "affection",
    "affectionate", "miss someone", "miss him", "miss her", "miss them",
    "i love", "cherish", "sweet", "dear", "beloved", "fond", "fondness",
    "touched", "moved", "heart full", "full of love", "soft-hearted",
    "warmhearted", "big-hearted", "sympathetic", "compassionate", "caring",
    "nurturing", "devoted", "smitten", "infatuated", "thank you", "thanks",
    "blessed", "feeling blessed", "warm inside", "melted", "heart melted",
    "all the love", "so much love", "soft heart", "all heart",
    "in my heart", "from the heart", "with love",
    // FR
    "amour", "amoureux", "amoureuse", "amoureusement", "j'aime", "tu aimes",
    "aime", "aimer", "aimé", "aimée", "aimés", "aimées",
    "tendresse", "tendre", "tendres", "doux", "douce", "douceur",
    "reconnaissant", "reconnaissante", "reconnaissance", "gratitude",
    "chéri", "chérie", "affection", "affectueux", "affectueuse",
    "gentil", "gentille", "bienveillant", "bienveillante",
    "ému", "émue", "touché", "touchée", "attendri", "attendrie",
    "le cœur plein", "plein d'amour", "fou amoureux", "folle amoureuse",
    "raide dingue", "coup de cœur", "coup de foudre",
    "je l'adore", "je t'adore", "adore", "j'adore", "adorable",
    "doux comme tout", "cher", "chère", "complice", "complicité",
    "attachement", "attaché", "attachée", "dévoué", "dévouée",
    "mignon", "mignonne", "caresse", "caressé", "caressée",
    "merci", "je te remercie", "j'apprécie", "ça me touche", "ça me touche profondément",
    "rempli d'amour", "remplie d'amour", "il me manque", "elle me manque",
    "ils me manquent", "elles me manquent",
    // PT
    "amor", "amores", "amo", "amas", "ama", "amamos", "amam", "amando",
    "amado", "amada", "amados", "amadas",
    "ternura", "terno", "terna", "carinho", "carinhoso", "carinhosa",
    "afeto", "afeição", "querido", "querida", "grato", "grata", "gratidão",
    "agradecido", "agradecida", "doce", "doces",
    "paixão", "apaixonado", "apaixonada", "encantado", "encantada",
    "fofo", "fofa", "fofinho", "fofinha", "quero bem", "gosto muito",
    "gostei", "atraído", "atraída", "atração",
    "bondoso", "bondosa", "gentileza", "bondade", "comovido", "comovida",
    "abraço", "abraçado", "abraçada", "obrigado", "obrigada",
    "agradeço", "tenho gratidão", "minha gratidão",
  ],
  loneliness: [
    // EN
    "lonely", "alone", "isolated", "disconnected", "nobody", "no one",
    "by myself", "left out", "abandoned", "feel alone", "no friends",
    "estranged", "outsider", "friendless", "solitary", "on my own",
    "all alone", "lonesome", "secluded", "withdrawn", "cut off",
    "on the outside", "third wheel", "ostracized", "shunned", "ignored",
    "forgotten", "neglected", "lonely as hell", "feel invisible",
    "invisible", "nobody sees me", "no one understands", "nobody understands",
    "feel unseen", "unseen", "outside looking in", "out of place",
    // FR
    "seul", "seule", "seuls", "seules", "solitude", "solitaire", "solitaires",
    "isolé", "isolée", "isolés", "isolées", "isolement",
    "personne pour", "abandonné", "abandonnée",
    "tout seul", "toute seule", "loin de tout", "déconnecté", "déconnectée",
    "esseulé", "esseulée", "j'ai personne", "ai personne",
    "à l'écart", "mis à l'écart", "mise à l'écart",
    "oublié", "oubliée", "délaissé", "délaissée", "en marge",
    "exclu", "exclue", "paumé", "paumée", "déraciné", "déracinée",
    "à part", "dans mon coin", "invisible", "incompris", "incomprise",
    "personne ne me comprend", "personne ne comprend", "à l'écart du monde",
    // PT
    "sozinho", "sozinha", "sozinhos", "sozinhas", "solidão", "solitário",
    "solitária", "isolado", "isolada", "abandonado", "abandonada",
    "ninguém para", "longe de tudo", "perdido na multidão",
    "esquecido", "esquecida", "deixado", "deixada", "à parte",
    "sem ninguém", "só", "sós", "deslocado", "deslocada",
    "no meu canto", "marginalizado", "marginalizada", "ninguém me entende",
    "ninguém entende", "ninguém me vê", "invisível",
  ],
  fear: [
    // EN
    "afraid", "scared", "anxious", "anxiety", "worried", "worry", "panic",
    "dread", "terrified", "nervous", "fear", "fearful", "spooked", "stressed",
    "stress", "freaking out", "on edge", "panicking", "panicked",
    "scared shitless", "scared to death", "petrified", "spooked out",
    "wound up", "restless", "uneasy", "jittery", "jumpy", "agitated",
    "stressed out", "in a panic", "anxious as hell", "racing heart",
    "can't breathe", "overwhelmed", "fearing", "dreading", "apprehensive",
    "afraid of", "scared of",
    // FR
    "peur", "peurs", "j'ai peur", "ai peur", "effrayé", "effrayée", "effrayés",
    "effrayées", "anxieux", "anxieuse", "anxiété", "angoisse", "angoissé",
    "angoissée", "stressé", "stressée", "stress", "inquiet", "inquiète",
    "inquiétude", "terrifié", "terrifiée", "trouille", "j'ai la trouille",
    "panique", "paniqué", "paniquée", "nerveux", "nerveuse",
    "j'angoisse", "je flippe", "ça me stresse", "tendu", "tendue",
    "sur les nerfs", "à cran", "anxiogène", "appréhension",
    "j'appréhende", "ai des sueurs froides", "sueurs froides",
    "le cœur qui bat", "ça me terrifie", "ça m'effraie",
    "submergé", "submergée", "débordé", "débordée",
    // PT
    "medo", "medos", "tenho medo", "com medo", "ansioso", "ansiosa",
    "ansiedade", "angústia", "angustiado", "angustiada", "preocupado",
    "preocupada", "preocupação", "estressado", "estressada", "estresse",
    "pânico", "aterrorizado", "aterrorizada", "nervoso", "nervosa",
    "apavorado", "apavorada", "tô surtando", "estou surtando",
    "tô apavorado", "tô apavorada", "tô nervoso", "tô nervosa",
    "coração disparado", "estou pirando", "tô pirando",
    "tô em pânico", "tô preocupado", "tô preocupada",
    "sobrecarregado", "sobrecarregada", "tô sobrecarregado",
  ],
  emptiness: [
    // EN
    "empty", "numb", "hollow", "blank", "nothing matters", "pointless",
    "meaningless", "void", "no point", "nothing inside", "feel nothing",
    "feel empty", "vacant", "i feel nothing", "felt nothing",
    "everything is empty", "feels empty", "want to disappear",
    "wanna disappear", "disappear", "nothing left", "running on nothing",
    "shell", "i'm a shell", "no taste for anything", "blah blah blah",
    "blank slate", "going through the motions", "phoning it in",
    "what's the point", "whats the point", "no use", "useless",
    // FR
    "vide", "vides", "vidé", "vidée", "rien à faire", "ne sers à",
    "à quoi bon", "ça sert à rien", "ça sert à quoi", "sens à rien",
    "engourdi", "engourdie", "anesthésié", "anesthésiée", "sans sens",
    "envie de rien", "j'ai envie de rien", "ai envie de rien", "pas envie",
    "j'ai pas envie", "ai pas envie", "ne ressens rien", "je ne ressens rien",
    "ne ressens plus rien", "creux", "creuse",
    "vidé de l'intérieur", "vide de sens", "ça ne mène à rien",
    "envie de disparaître", "j'ai envie de disparaître", "je veux disparaître",
    "absurde de vivre", "tout est vide", "le néant",
    // PT
    "vazio", "vazia", "vazios", "vazias", "oco", "oca",
    "nada faz sentido", "sem sentido", "para quê", "qual o sentido",
    "anestesiado", "anestesiada", "entorpecido", "entorpecida",
    "não sinto nada", "sem motivo", "vontade de nada", "sem vontade",
    "vontade de sumir", "quero sumir", "tô sem rumo", "estou sem rumo",
    "vazio por dentro", "vazia por dentro", "tudo vazio", "tudo oco",
    "não faz sentido", "perdi o sentido",
  ],
  grief: [
    // EN
    "grief", "grieving", "mourning", "lost someone", "she died", "he died",
    "they died", "passed away", "breakup", "broke up", "dumped", "loss",
    "heartbroken", "broken heart", "mourn", "grieved", "death", "died",
    "funeral", "wake", "lost my", "miss them so much", "heartbreak",
    "ached", "aching heart", "in mourning", "after the funeral",
    "they're gone", "she's gone", "he's gone", "missing them",
    // FR
    "deuil", "deuils", "endeuillé", "endeuillée", "mort", "morte", "décès",
    "décédé", "décédée", "perdu quelqu'un", "perdu un", "perdu une",
    "rupture", "séparation", "séparé", "séparée", "il m'a quitté",
    "elle m'a quitté", "largué", "larguée", "cœur brisé", "coeur brisé",
    "chagriné", "chagrinée", "peine", "j'ai perdu",
    "il est parti", "elle est partie", "il nous a quittés", "elle nous a quittés",
    "enterrement", "obsèques", "deuil en cours", "deuil impossible",
    "le manque", "manque déchirant",
    // PT
    "luto", "lutos", "enlutado", "enlutada", "morreu", "morte", "faleceu",
    "perdi alguém", "perdi um", "perdi uma", "separação", "separado",
    "separada", "rompimento", "terminamos", "coração partido",
    "coração quebrado", "mágoa", "magoado", "magoada", "perdi",
    "ele se foi", "ela se foi", "foi embora", "foi-se", "sinto falta dele",
    "sinto falta dela", "ele partiu", "ela partiu", "morte súbita",
    "enterro", "velório", "luto difícil",
  ],
  absurdity: [
    // EN
    "absurd", "ridiculous", "what's the point", "whats the point", "weird",
    "nonsense", "makes no sense", "joke", "farce", "this is stupid",
    "comical", "ironic", "absurdly", "preposterous", "laughable",
    "wtf", "what the hell", "what is this", "the whole thing is a joke",
    "such bullshit", "bullshit", "what a circus", "circus", "clown show",
    "kafkaesque", "feels like a dream", "surreal",
    // FR
    "absurde", "absurdes", "absurdité", "ridicule", "ridicules",
    "à quoi ça rime", "ça n'a aucun sens", "n'a pas de sens", "ne rime à rien",
    "c'est une blague", "c'est du grand n'importe quoi", "n'importe quoi",
    "loufoque", "grotesque", "burlesque",
    "c'est un cirque", "le cirque", "le grand n'importe quoi",
    "ça me dépasse", "ça dépasse l'entendement", "surréaliste",
    "kafkaïen", "kafkaïenne", "c'est du Kafka",
    // PT
    "absurdo", "absurda", "absurdos", "ridículo", "ridícula",
    "qual o sentido", "não faz sentido", "uma piada", "sem nexo",
    "que loucura", "uma farsa", "que palhaçada", "palhaçada",
    "que comédia", "isso é uma piada", "que circo", "um circo",
    "que viagem", "tá doido", "tá doida", "kafkiano", "kafkiana",
  ],
  longing: [
    // EN
    "miss", "missing", "yearning", "yearn", "wish", "if only", "want",
    "wanting", "nostalgia", "nostalgic", "homesick", "long for", "longing",
    "ache for", "pining", "i miss", "missing him", "missing her",
    "missing them", "what could have been", "back when", "back then",
    "remember when", "remember the time", "the good old days",
    "wish i could", "i'd love to", "want so badly", "ache",
    "yearn for", "long for",
    // FR
    "manque", "manques", "tu me manques", "il me manque", "elle me manque",
    "me manquent", "ça me manque", "nostalgie", "nostalgique", "regrette",
    "regretter", "envie de", "j'aimerais", "j'aurais aimé", "voudrais",
    "si seulement", "languir", "désir", "désirer", "rêve de",
    "j'aurais voulu", "j'aurais préféré", "ai envie", "j'ai envie",
    "ça me manque tellement", "le temps d'avant", "à l'époque",
    "j'aimerais tellement", "ça me fait languir",
    // PT
    "saudade", "saudades", "tenho saudade", "tenho saudades", "falta",
    "me faz falta", "sinto falta", "nostalgia", "nostálgico", "nostálgica",
    "queria", "quisera", "desejo", "desejar", "ânsia", "ansiar",
    "que saudade", "tô com saudade", "estou com saudade", "matar a saudade",
    "matando a saudade", "ai que saudade", "naquele tempo",
    "no tempo em que", "quem dera",
  ],
  defiance: [
    // EN
    "angry", "pissed", "furious", "rage", "raging", "frustrated", "frustration",
    "fed up", "sick of", "tired of", "had enough", "mad", "annoyed", "livid",
    "won't accept", "refuse", "i refuse", "fuck this", "fuck that",
    "enough already", "i've had it", "had it up to here", "no more",
    "i'm done with this", "screw this", "rebellious", "rebel", "rebelling",
    "raging mad", "boiling", "boiling over", "irate", "indignant",
    "indignation", "outraged", "outrage",
    // FR
    "colère", "en colère", "furieux", "furieuse", "fâché", "fâchée",
    "frustré", "frustrée", "frustration", "énervé", "énervée", "énervement",
    "rage", "enragé", "enragée", "ras-le-bol", "j'en ai marre", "marre de",
    "agacé", "agacée", "exaspéré", "exaspérée", "remonté", "remontée",
    "j'ai le seum", "le seum", "j'ai la haine", "la haine", "remontée à bloc",
    "monter au créneau", "j'ai pété un câble", "péter un câble",
    "ça me gonfle", "ça me saoule", "saoulé", "saoulée", "ça me prend la tête",
    "j'en ai assez", "ça suffit", "trop c'est trop", "refuse",
    "indigné", "indignée", "indignation", "révolté", "révoltée",
    "révolte", "outré", "outrée",
    // PT
    "raiva", "com raiva", "irritado", "irritada", "irritação",
    "furioso", "furiosa", "fúria", "bravo", "brava", "puto", "puta",
    "tô puto", "tô puta", "tô com raiva", "estou com raiva",
    "indignado", "indignada", "indignação", "revoltado", "revoltada",
    "revolta", "estou farto", "estou farta", "saco cheio", "tô de saco cheio",
    "encheu o saco", "deu ruim", "tá osso", "to a fim de quebrar",
    "que ódio", "ódio", "uma raiva", "tô fervendo",
  ],
  courage: [
    // EN
    "scared but", "going to do it", "facing", "showing up", "brave", "courage",
    "courageous", "stepping up", "trying anyway", "doing it anyway",
    "i can do this", "i got this", "got this", "fired up", "lit up",
    "in spite of", "despite the fear", "doing it scared", "showing courage",
    "step up", "facing it", "stepping into", "going for it",
    "i'll do it", "i will do it", "no fear", "facing the day",
    // FR
    "courage", "courageux", "courageuse", "j'y vais", "je vais le faire",
    "j'ose", "oser", "ose", "affronter", "affronte", "faire face",
    "tenir bon", "ne pas céder", "vaillant", "vaillante", "se battre",
    "je me bats", "battant", "battante", "j'ai la pêche", "la pêche",
    "remonté à bloc", "à bloc", "j'y crois", "y croire", "tenir le coup",
    "tiens le coup", "tiens bon", "tenir tête", "garder le cap",
    "malgré tout", "malgré la peur", "quand même", "quoi qu'il arrive",
    // PT
    "coragem", "corajoso", "corajosa", "vou tentar", "vou fazer", "enfrentar",
    "enfrento", "encarar", "encaro", "valente", "ousar", "ouso", "destemido",
    "destemida", "firmeza", "tô firme", "estou firme", "vai dar certo",
    "vou conseguir", "consigo", "fé", "tenho fé", "garra",
    "apesar do medo", "apesar de tudo", "vou em frente",
  ],
  wonder: [
    // EN
    "beautiful", "amazed", "amazing", "alive", "in awe", "astonished",
    "astonishing", "marvelous", "miracle", "magical", "wonder", "wondrous",
    "breathtaking", "blown away", "stunning", "stunned", "in wonder",
    "feel alive", "so alive", "lit up", "lit", "glowing", "shimmering",
    "radiant", "blissful", "bliss", "happy", "joyful", "joy", "ecstatic",
    "elated", "exuberant", "exhilarated", "feeling great", "feel great",
    "vibing", "in the flow", "flow state", "perfect day", "wonderful day",
    // FR
    "beau", "belle", "beaux", "belles", "beauté", "magnifique", "magnifiques",
    "émerveillé", "émerveillée", "émerveillement", "merveilleux",
    "merveilleuse", "miracle", "miraculeux", "miraculeuse", "magique",
    "stupéfait", "stupéfaite", "ébloui", "éblouie", "sublime",
    "ravissant", "ravissante", "ravi", "ravie", "exalté", "exaltée",
    "heureux", "heureuse", "heureuses", "joie", "joyeux", "joyeuse",
    "j'ai la pêche", "en pleine forme", "rayonnant", "rayonnante",
    "ça brille", "splendide", "splendides", "épanoui", "épanouie",
    // PT
    "lindo", "linda", "lindos", "lindas", "beleza", "belo", "bela",
    "maravilhoso", "maravilhosa", "maravilha", "milagre", "milagroso",
    "milagrosa", "mágico", "mágica", "deslumbrado", "deslumbrada",
    "espantoso", "espantosa", "sublime", "alegre", "alegres", "alegria",
    "feliz", "felizes", "felicidade", "radiante", "radiantes",
    "que dia lindo", "tô feliz", "estou feliz", "tô bem demais",
    "tô numa boa", "estou numa boa", "tô vibrando",
  ],
  lucidity: [
    // EN
    "confused", "doubt", "uncertain", "questioning", "stuck", "who am i",
    "what am i doing", "lost", "directionless", "unclear", "perdu",
    "what's the meaning", "trying to understand", "don't know what",
    "don't know who", "don't know where", "what's going on", "what's happening",
    "wondering", "puzzled", "perplexed", "scattered", "spinning", "head spinning",
    "head's a mess", "muddled", "not myself", "not feeling like myself",
    "going in circles", "all over the place", "what am i", "where am i",
    "i don't know anymore", "don't know anymore",
    // FR
    "perdu", "perdue", "perdus", "perdues", "doute", "doutes", "je doute",
    "incertain", "incertaine", "confusion", "confus", "confuse", "questionne",
    "me questionne", "où je vais", "qui je suis", "ne sais plus",
    "comprends pas", "comprend pas", "je sais plus",
    "je tourne en rond", "tourne en rond", "ai l'esprit confus",
    "j'y comprends rien", "n'y comprends rien", "le bazar dans la tête",
    "dans le brouillard", "à l'ouest", "complètement à l'ouest",
    "je sais plus où j'en suis", "perdu mes repères",
    // PT
    "perdido", "perdida", "perdidos", "perdidas", "dúvida", "dúvidas",
    "incerto", "incerta", "confuso", "confusa", "confusão", "questiono",
    "me questiono", "quem sou", "não entendo",
    "sem rumo", "tô sem rumo", "estou sem rumo", "perdido nos pensamentos",
    "minha cabeça tá um caos", "cabeça uma bagunça", "tô confuso",
    "tô confusa", "estou perdido", "estou perdida",
  ],
  acceptance: [
    // EN
    "okay", "ok", "fine", "at peace", "calm", "settled", "letting go",
    "let go", "acceptance", "accepting", "content", "alright", "at ease",
    "i'm good", "feeling good", "all good", "doing okay", "doing fine",
    "doing well", "doing alright", "things are fine", "things are good",
    "at home", "feel at home", "feeling settled", "feeling steady", "steady",
    "grounded", "feeling grounded", "centered", "balanced", "in balance",
    "letting it be", "let it be", "going with the flow", "with the flow",
    "i'm fine", "i'm ok", "i'm okay", "doing better", "better today",
    "feeling better", "actually good", "actually okay", "actually fine",
    // FR
    "bien", "ça va", "ça va bien", "tranquille", "tranquilles", "paisible",
    "paisibles", "serein", "sereine", "sérénité", "en paix", "lâcher prise",
    "j'accepte", "accepter", "calme", "calmes", "apaisé", "apaisée",
    "réconcilié", "réconciliée", "tout va bien", "tout roule", "tout baigne",
    "ça va aller", "ça ira", "tranquillement", "posé", "posée",
    "détendu", "détendue", "zen", "ça me va", "c'est bon",
    "ça roule", "ça baigne", "rien à signaler",
    "je me sens bien", "feel pretty good",
    // PT
    "tranquilo", "tranquila", "tranquilos", "tranquilas", "em paz",
    "sereno", "serena", "serenidade", "calmo", "calma", "aceito",
    "aceitar", "aceitação", "estou bem", "tudo bem", "deixar ir",
    "tô bem", "tô numa boa", "estou numa boa", "tô tranquilo", "tô tranquila",
    "tô na paz", "tô de boa", "estou de boa", "de boa", "suave",
    "tô suave", "estou suave", "tudo certo", "tá tudo certo", "tô melhor",
    "estou melhor", "indo bem",
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
    .replace(/[.,;:!?"()\[\]{}«»—–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const CLAUSE_SEPARATORS = [
  "but", "however", "although", "though", "yet",
  "mais", "cependant", "pourtant", "néanmoins", "toutefois",
  "mas", "porém", "contudo", "todavia", "entretanto",
];

function splitClauses(normalized: string): string[] {
  const pattern = new RegExp(`\\s+(?:${CLAUSE_SEPARATORS.join("|")})\\s+`, "g");
  return normalized
    .split(pattern)
    .map((c) => c.trim())
    .filter(Boolean);
}

// Negation cues. Reduced to actual negators (not idiom-prone words like
// "plus" or "rien" that frequently appear in non-negation phrases such as
// "j'en peux plus" or "j'ai envie de rien").
const NEGATION_TOKENS = new Set([
  // EN
  "not", "no", "never", "nothing", "nobody", "none",
  // FR
  "ne", "non",
  // PT
  "não", "nao", "nunca", "nada", "ninguém", "ninguem", "nem",
]);

// Postposed negation cue: in French, "pas" comes after the verb.
const POSTPOSED_NEGATIONS = new Set(["pas"]);

function clauseMatchPosition(clause: string, phrase: string): number {
  if (phrase.includes(" ") || /[''-]/.test(phrase)) {
    return clause.indexOf(phrase);
  }
  // Word-boundary match for single tokens (Unicode-aware).
  const idx = clause.indexOf(phrase);
  if (idx === -1) return -1;
  const before = idx === 0 ? " " : clause[idx - 1];
  const after = idx + phrase.length >= clause.length ? " " : clause[idx + phrase.length];
  const isWordChar = (c: string) => /[\p{L}\p{N}]/u.test(c);
  if (isWordChar(before) || isWordChar(after)) return -1;
  return idx;
}

// Per-keyword negation: a match is negated only if a negation cue is near
// the matched phrase. This lets idioms like "j'en peux plus" (containing
// "plus") still match exhaustion, while "j'aime pas" correctly cancels the
// tenderness match on "j'aime".
function isMatchNegated(clause: string, matchStart: number, matchLength: number): boolean {
  const before = clause.substring(0, matchStart);
  const after = clause.substring(matchStart + matchLength);

  // English contraction in close preceding context (don't, doesn't, isn't, ...)
  if (/n't\b/.test(before.slice(-15))) return true;

  // Preceding negation tokens in the last ~3 tokens. Apostrophes are split out
  // here so "n'aime" surfaces "n" / "aime" — though we don't currently treat
  // bare "n" as a negation cue (matches with "n" alone are filtered by the
  // length-3 lexicon convention anyway).
  const lastBefore = before
    .replace(/'/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(-3);
  if (lastBefore.some((t) => NEGATION_TOKENS.has(t))) return true;

  // Postposed "pas" within the next two tokens.
  const firstAfter = after.trim().split(/\s+/).slice(0, 2);
  if (firstAfter.some((t) => POSTPOSED_NEGATIONS.has(t))) return true;

  return false;
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
    for (const tag of ALL_TAGS) {
      // Longer phrases first so idioms beat their constituent words.
      const phrases = [...LEXICON[tag]].sort((a, b) => b.length - a.length);
      for (const phrase of phrases) {
        const idx = clauseMatchPosition(clause, phrase);
        if (idx >= 0 && !isMatchNegated(clause, idx, phrase.length)) {
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

export type SelectionVia = "match" | "adjacent" | "random";

export interface Selection {
  quote: Quote;
  matchedTags: Tag[];
  via: SelectionVia;
}

export function selectQuote(input: string, opts: SelectOptions = {}): Selection {
  const excludedIds = new Set(opts.excludedIds ?? []);
  const excludedTags = new Set(opts.excludedTags ?? []);
  const { scoredTags } = matchTags(input);

  const usableTags = scoredTags.filter((t) => !excludedTags.has(t));

  const available = (predicate: (q: Quote) => boolean) =>
    quotes.filter((q) => !excludedIds.has(q.id) && predicate(q));

  if (usableTags.length >= 2) {
    const intersection = available(
      (q) => q.tags.filter((t) => usableTags.includes(t)).length >= 2,
    );
    if (intersection.length > 0) {
      const quote = pickRandom(intersection);
      const overlap = quote.tags.filter((t) => usableTags.includes(t));
      return { quote, matchedTags: overlap, via: "match" };
    }
  }

  if (usableTags.length >= 1) {
    const union = available((q) => q.tags.some((t) => usableTags.includes(t)));
    if (union.length > 0) {
      const quote = pickRandom(union);
      const overlap = quote.tags.filter((t) => usableTags.includes(t));
      return { quote, matchedTags: overlap, via: "match" };
    }
  }

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
        const quote = pickRandom(fromAdjacent);
        const overlap = quote.tags.filter((t) => adjacent.has(t));
        return { quote, matchedTags: overlap, via: "adjacent" };
      }
    }
  }

  const pool = quotes.filter((q) => !excludedIds.has(q.id));
  const finalPool = pool.length > 0 ? pool : quotes;
  return { quote: pickRandom(finalPool), matchedTags: [], via: "random" };
}
