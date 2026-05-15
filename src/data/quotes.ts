// Curated quotes. Attribution rule: if I am not confident about the exact
// wording or attribution, the quote is omitted rather than guessed.

export type Tag =
  | "melancholy"
  | "defiance"
  | "tenderness"
  | "lucidity"
  | "acceptance"
  | "exhaustion"
  | "wonder"
  | "loneliness"
  | "fear"
  | "longing"
  | "emptiness"
  | "courage"
  | "absurdity"
  | "grief";

export const ALL_TAGS: Tag[] = [
  "melancholy",
  "defiance",
  "tenderness",
  "lucidity",
  "acceptance",
  "exhaustion",
  "wonder",
  "loneliness",
  "fear",
  "longing",
  "emptiness",
  "courage",
  "absurdity",
  "grief",
];

export interface Quote {
  id: number;
  text: string;
  author: string;
  source?: string;
  tags: Tag[];
}

export const quotes: Quote[] = [
  // ── Marcus Aurelius ─────────────────────────────────────────────
  {
    id: 1,
    text: "You have power over your mind — not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["courage", "lucidity"],
  },
  {
    id: 2,
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["defiance", "acceptance", "courage"],
  },
  {
    id: 3,
    text: "Confine yourself to the present.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["acceptance", "fear"],
  },
  {
    id: 4,
    text: "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["courage"],
  },
  {
    id: 5,
    text: "The best revenge is to be unlike him who performed the injury.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["defiance"],
  },
  {
    id: 6,
    text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["lucidity"],
  },
  {
    id: 7,
    text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["fear", "lucidity", "acceptance"],
  },
  {
    id: 8,
    text: "How much time he saves who does not look to see what his neighbor says or does or thinks.",
    author: "Marcus Aurelius",
    source: "Meditations",
    tags: ["lucidity", "defiance"],
  },

  // ── Cioran ──────────────────────────────────────────────────────
  {
    id: 9,
    text: "It is not worth the bother of killing yourself, since you always kill yourself too late.",
    author: "Emil Cioran",
    source: "The Trouble with Being Born",
    tags: ["absurdity", "melancholy"],
  },
  {
    id: 10,
    text: "I do nothing, granted. But I see the hours pass — which is better than trying to fill them.",
    author: "Emil Cioran",
    source: "The Trouble with Being Born",
    tags: ["exhaustion", "absurdity", "emptiness"],
  },
  {
    id: 11,
    text: "We are all deep in a hell each moment of which is a miracle.",
    author: "Emil Cioran",
    tags: ["absurdity", "wonder", "lucidity"],
  },
  {
    id: 12,
    text: "Write books only if you are going to say in them the things you would never dare confide to anyone.",
    author: "Emil Cioran",
    source: "The Trouble with Being Born",
    tags: ["courage", "lucidity"],
  },
  {
    id: 13,
    text: "A book is a suicide postponed.",
    author: "Emil Cioran",
    source: "The Trouble with Being Born",
    tags: ["melancholy", "absurdity"],
  },
  {
    id: 14,
    text: "Only optimists commit suicide, optimists who can no longer be optimists. The others, having no reason to live, why would they have any to die?",
    author: "Emil Cioran",
    source: "The Trouble with Being Born",
    tags: ["absurdity", "emptiness", "melancholy"],
  },

  // ── Pessoa ──────────────────────────────────────────────────────
  {
    id: 15,
    text: "I've always rejected being understood. To be understood is to prostitute oneself.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["defiance", "loneliness"],
  },
  {
    id: 16,
    text: "Tedium is not the disease of being bored because there's nothing to do, but the more serious disease of feeling that there's nothing worth doing.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["emptiness", "exhaustion", "melancholy"],
  },
  {
    id: 17,
    text: "Each of us is several, is many, is a profusion of selves.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["lucidity"],
  },
  {
    id: 18,
    text: "Literature is the most agreeable way of ignoring life.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["absurdity", "lucidity"],
  },
  {
    id: 19,
    text: "The feelings that hurt most, the emotions that sting most, are those that are absurd: the longing for impossible things, precisely because they are impossible; nostalgia for what never was; the desire for what could have been.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["longing", "melancholy", "grief"],
  },
  {
    id: 20,
    text: "My soul is a hidden orchestra; I know not what instruments, what fiddlestrings and harps, drums and tambours I sound and clash inside myself. All I hear is the symphony.",
    author: "Fernando Pessoa",
    source: "The Book of Disquiet",
    tags: ["lucidity", "wonder"],
  },
  {
    id: 21,
    text: "I have no ambitions nor desires. To be a poet is not my ambition. It's my way of being alone.",
    author: "Fernando Pessoa",
    tags: ["loneliness", "acceptance"],
  },

  // ── Rumi ────────────────────────────────────────────────────────
  {
    id: 22,
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    tags: ["grief", "tenderness", "acceptance"],
  },
  {
    id: 23,
    text: "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
    author: "Rumi",
    tags: ["courage", "defiance"],
  },
  {
    id: 24,
    text: "The cure for pain is in the pain.",
    author: "Rumi",
    source: "Mathnawi",
    tags: ["grief", "acceptance"],
  },
  {
    id: 25,
    text: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.",
    author: "Rumi",
    tags: ["tenderness", "acceptance"],
  },
  {
    id: 26,
    text: "You are not a drop in the ocean. You are the entire ocean in a drop.",
    author: "Rumi",
    tags: ["wonder", "courage"],
  },

  // ── David Foster Wallace ────────────────────────────────────────
  {
    id: 27,
    text: "Everybody worships. The only choice we get is what to worship.",
    author: "David Foster Wallace",
    source: "This Is Water",
    tags: ["lucidity"],
  },
  {
    id: 28,
    text: "The really important kind of freedom involves attention, and awareness, and discipline, and effort, and being able truly to care about other people and to sacrifice for them, over and over, in myriad petty little unsexy ways, every day.",
    author: "David Foster Wallace",
    source: "This Is Water",
    tags: ["tenderness", "courage", "lucidity"],
  },
  {
    id: 29,
    text: "The truth will set you free. But not until it is finished with you.",
    author: "David Foster Wallace",
    source: "Infinite Jest",
    tags: ["lucidity", "grief"],
  },
  {
    id: 30,
    text: "Everything I've ever let go of has claw marks on it.",
    author: "David Foster Wallace",
    source: "Infinite Jest",
    tags: ["grief", "longing", "acceptance"],
  },
  {
    id: 31,
    text: "It did what all ads are supposed to do: create an anxiety relievable by purchase.",
    author: "David Foster Wallace",
    source: "Infinite Jest",
    tags: ["lucidity", "absurdity"],
  },

  // ── Annie Dillard ───────────────────────────────────────────────
  {
    id: 32,
    text: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard",
    source: "The Writing Life",
    tags: ["lucidity"],
  },
  {
    id: 33,
    text: "Beauty and grace are performed whether or not we will or sense them. The least we can do is try to be there.",
    author: "Annie Dillard",
    source: "Pilgrim at Tinker Creek",
    tags: ["wonder", "tenderness"],
  },
  {
    id: 34,
    text: "I am a fugitive and a vagabond, a sojourner seeking signs.",
    author: "Annie Dillard",
    source: "Pilgrim at Tinker Creek",
    tags: ["longing", "loneliness"],
  },
  {
    id: 35,
    text: "We are here to abet creation and to witness it, to notice each thing so each thing gets noticed.",
    author: "Annie Dillard",
    tags: ["wonder", "tenderness"],
  },

  // ── Anne Carson ─────────────────────────────────────────────────
  {
    id: 36,
    text: "Why does tragedy exist? Because you are full of rage. Why are you full of rage? Because you are full of grief.",
    author: "Anne Carson",
    source: "Grief Lessons",
    tags: ["grief", "defiance"],
  },
  {
    id: 37,
    text: "You remember too much, my mother said to me recently. Why hold onto all that? And I said, Where can I put it down?",
    author: "Anne Carson",
    source: "The Glass Essay",
    tags: ["grief", "longing"],
  },
  {
    id: 38,
    text: "If prose is a house, poetry is a man on fire running quite fast through it.",
    author: "Anne Carson",
    tags: ["defiance", "wonder"],
  },
  {
    id: 39,
    text: "There is no person without a world.",
    author: "Anne Carson",
    source: "Plainwater",
    tags: ["loneliness", "tenderness"],
  },

  // ── Etty Hillesum ───────────────────────────────────────────────
  {
    id: 40,
    text: "Despite everything, life is full of beauty and meaning.",
    author: "Etty Hillesum",
    source: "An Interrupted Life",
    tags: ["acceptance", "wonder", "courage"],
  },
  {
    id: 41,
    text: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
    author: "Etty Hillesum",
    source: "An Interrupted Life",
    tags: ["exhaustion", "acceptance", "tenderness"],
  },
  {
    id: 42,
    text: "Ultimately, we have just one moral duty: to reclaim large areas of peace in ourselves, more and more peace, and to reflect it toward others.",
    author: "Etty Hillesum",
    source: "An Interrupted Life",
    tags: ["acceptance", "courage", "tenderness"],
  },
  {
    id: 43,
    text: "I draw prayer round me like a dark protective wall.",
    author: "Etty Hillesum",
    source: "An Interrupted Life",
    tags: ["fear", "courage"],
  },

  // ── Simone Weil ─────────────────────────────────────────────────
  {
    id: 44,
    text: "Attention is the rarest and purest form of generosity.",
    author: "Simone Weil",
    tags: ["tenderness", "lucidity"],
  },
  {
    id: 45,
    text: "All the natural movements of the soul are controlled by laws analogous to those of physical gravity. Grace is the only exception.",
    author: "Simone Weil",
    source: "Gravity and Grace",
    tags: ["wonder", "lucidity"],
  },
  {
    id: 46,
    text: "Imagination and fiction make up more than three quarters of our real life.",
    author: "Simone Weil",
    source: "Gravity and Grace",
    tags: ["lucidity", "absurdity"],
  },

  // ── Rilke ───────────────────────────────────────────────────────
  {
    id: 47,
    text: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.",
    author: "Rainer Maria Rilke",
    source: "Book of Hours",
    tags: ["acceptance", "courage", "fear"],
  },
  {
    id: 48,
    text: "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage.",
    author: "Rainer Maria Rilke",
    source: "Letters to a Young Poet",
    tags: ["courage", "fear"],
  },
  {
    id: 49,
    text: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.",
    author: "Rainer Maria Rilke",
    source: "Letters to a Young Poet",
    tags: ["lucidity", "acceptance", "longing"],
  },
  {
    id: 50,
    text: "For one human being to love another: that is perhaps the most difficult of all our tasks; the ultimate, the last test and proof, the work for which all other work is but preparation.",
    author: "Rainer Maria Rilke",
    source: "Letters to a Young Poet",
    tags: ["tenderness", "longing"],
  },

  // ── Kierkegaard ─────────────────────────────────────────────────
  {
    id: 51,
    text: "Anxiety is the dizziness of freedom.",
    author: "Søren Kierkegaard",
    source: "The Concept of Anxiety",
    tags: ["fear", "lucidity"],
  },
  {
    id: 52,
    text: "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
    tags: ["lucidity", "acceptance"],
  },
  {
    id: 53,
    text: "The most common form of despair is not being who you are.",
    author: "Søren Kierkegaard",
    source: "The Sickness Unto Death",
    tags: ["melancholy", "lucidity", "emptiness"],
  },

  // ── Camus ───────────────────────────────────────────────────────
  {
    id: 54,
    text: "In the depth of winter, I finally learned that there was in me an invincible summer.",
    author: "Albert Camus",
    source: "Return to Tipasa",
    tags: ["courage", "acceptance"],
  },
  {
    id: 55,
    text: "One must imagine Sisyphus happy.",
    author: "Albert Camus",
    source: "The Myth of Sisyphus",
    tags: ["absurdity", "acceptance", "defiance"],
  },
  {
    id: 56,
    text: "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy.",
    author: "Albert Camus",
    source: "The Myth of Sisyphus",
    tags: ["absurdity", "lucidity"],
  },
  {
    id: 57,
    text: "I rebel — therefore we exist.",
    author: "Albert Camus",
    source: "The Rebel",
    tags: ["defiance", "courage"],
  },

  // ── Mary Oliver ─────────────────────────────────────────────────
  {
    id: 58,
    text: "Tell me, what is it you plan to do with your one wild and precious life?",
    author: "Mary Oliver",
    source: "The Summer Day",
    tags: ["wonder", "courage"],
  },
  {
    id: 59,
    text: "When it's over, I want to say: all my life I was a bride married to amazement.",
    author: "Mary Oliver",
    source: "When Death Comes",
    tags: ["wonder", "tenderness"],
  },
  {
    id: 60,
    text: "You do not have to be good. You do not have to walk on your knees for a hundred miles through the desert repenting. You only have to let the soft animal of your body love what it loves.",
    author: "Mary Oliver",
    source: "Wild Geese",
    tags: ["tenderness", "acceptance"],
  },
  {
    id: 61,
    text: "Whoever you are, no matter how lonely, the world offers itself to your imagination.",
    author: "Mary Oliver",
    source: "Wild Geese",
    tags: ["loneliness", "wonder", "tenderness"],
  },
  {
    id: 62,
    text: "Instructions for living a life: Pay attention. Be astonished. Tell about it.",
    author: "Mary Oliver",
    source: "Sometimes",
    tags: ["wonder", "lucidity"],
  },

  // ── James Baldwin ───────────────────────────────────────────────
  {
    id: 63,
    text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    author: "James Baldwin",
    tags: ["courage", "lucidity"],
  },
  {
    id: 64,
    text: "Love takes off the masks that we fear we cannot live without and know we cannot live within.",
    author: "James Baldwin",
    source: "The Fire Next Time",
    tags: ["tenderness", "courage", "fear"],
  },
  {
    id: 65,
    text: "I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.",
    author: "James Baldwin",
    tags: ["lucidity", "grief", "defiance"],
  },

  // ── Joan Didion ─────────────────────────────────────────────────
  {
    id: 66,
    text: "We tell ourselves stories in order to live.",
    author: "Joan Didion",
    source: "The White Album",
    tags: ["lucidity"],
  },
  {
    id: 67,
    text: "Life changes in the instant. The ordinary instant.",
    author: "Joan Didion",
    source: "The Year of Magical Thinking",
    tags: ["grief", "lucidity"],
  },
  {
    id: 68,
    text: "I have already lost touch with a couple of people I used to be.",
    author: "Joan Didion",
    source: "On Keeping a Notebook",
    tags: ["longing", "lucidity", "melancholy"],
  },

  // ── Borges ──────────────────────────────────────────────────────
  {
    id: 69,
    text: "I have always imagined that Paradise will be a kind of library.",
    author: "Jorge Luis Borges",
    tags: ["wonder"],
  },
  {
    id: 70,
    text: "Time is the substance I am made of. Time is a river which sweeps me along, but I am the river; it is a tiger which destroys me, but I am the tiger; it is a fire which consumes me, but I am the fire.",
    author: "Jorge Luis Borges",
    source: "A New Refutation of Time",
    tags: ["lucidity", "wonder"],
  },

  // ── Clarice Lispector ───────────────────────────────────────────
  {
    id: 71,
    text: "I am so afraid I shall suddenly understand. I do not want to take any sudden steps.",
    author: "Clarice Lispector",
    source: "Água Viva",
    tags: ["fear", "lucidity"],
  },
  {
    id: 72,
    text: "Freedom is little: what I want has not yet been named.",
    author: "Clarice Lispector",
    tags: ["longing", "defiance"],
  },
  {
    id: 73,
    text: "I do not want to have the terrible limitation of those who live merely from what can make sense. Not I: I want an invented truth.",
    author: "Clarice Lispector",
    source: "Água Viva",
    tags: ["defiance", "wonder"],
  },

  // ── Wisława Szymborska ──────────────────────────────────────────
  {
    id: 74,
    text: "We're extremely fortunate not to know precisely the kind of world we live in.",
    author: "Wisława Szymborska",
    source: "Could Have",
    tags: ["absurdity", "lucidity"],
  },
  {
    id: 75,
    text: "I prefer myself liking people to myself loving mankind.",
    author: "Wisława Szymborska",
    source: "Possibilities",
    tags: ["tenderness", "lucidity"],
  },

  // ── Kafka ───────────────────────────────────────────────────────
  {
    id: 76,
    text: "A book must be the axe for the frozen sea inside us.",
    author: "Franz Kafka",
    source: "Letter to Oskar Pollak",
    tags: ["defiance", "grief"],
  },
  {
    id: 77,
    text: "You are free and that is why you are lost.",
    author: "Franz Kafka",
    tags: ["fear", "absurdity", "lucidity"],
  },
  {
    id: 78,
    text: "I am a cage, in search of a bird.",
    author: "Franz Kafka",
    source: "Zürau Aphorisms",
    tags: ["longing", "emptiness", "loneliness"],
  },

  // ── Wittgenstein ────────────────────────────────────────────────
  {
    id: 79,
    text: "The limits of my language mean the limits of my world.",
    author: "Ludwig Wittgenstein",
    source: "Tractatus Logico-Philosophicus",
    tags: ["lucidity"],
  },
  {
    id: 80,
    text: "Whereof one cannot speak, thereof one must be silent.",
    author: "Ludwig Wittgenstein",
    source: "Tractatus Logico-Philosophicus",
    tags: ["acceptance", "lucidity"],
  },
  {
    id: 81,
    text: "It is not how things are in the world that is mystical, but that it exists.",
    author: "Ludwig Wittgenstein",
    source: "Tractatus Logico-Philosophicus",
    tags: ["wonder"],
  },

  // ── Virginia Woolf ──────────────────────────────────────────────
  {
    id: 82,
    text: "I am rooted, but I flow.",
    author: "Virginia Woolf",
    source: "The Waves",
    tags: ["acceptance", "lucidity"],
  },
  {
    id: 83,
    text: "I have lost friends, some by death, others through sheer inability to cross the street.",
    author: "Virginia Woolf",
    source: "The Waves",
    tags: ["loneliness", "grief", "melancholy"],
  },

  // ── Nietzsche ───────────────────────────────────────────────────
  {
    id: 84,
    text: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
    source: "Twilight of the Idols",
    tags: ["courage", "exhaustion"],
  },
  {
    id: 85,
    text: "You must have chaos within you to give birth to a dancing star.",
    author: "Friedrich Nietzsche",
    source: "Thus Spoke Zarathustra",
    tags: ["defiance", "wonder", "courage"],
  },
  {
    id: 86,
    text: "Become who you are.",
    author: "Friedrich Nietzsche",
    source: "Thus Spoke Zarathustra",
    tags: ["courage", "lucidity"],
  },

  // ── Seneca ──────────────────────────────────────────────────────
  {
    id: 87,
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    source: "Letters from a Stoic",
    tags: ["fear", "lucidity"],
  },
  {
    id: 88,
    text: "It is not that we have a short time to live, but that we waste much of it.",
    author: "Seneca",
    source: "On the Shortness of Life",
    tags: ["lucidity", "longing"],
  },

  // ── Auden ───────────────────────────────────────────────────────
  {
    id: 89,
    text: "We must love one another or die.",
    author: "W. H. Auden",
    source: "September 1, 1939",
    tags: ["tenderness", "courage"],
  },

  // ── Beckett ─────────────────────────────────────────────────────
  {
    id: 90,
    text: "I can't go on, I'll go on.",
    author: "Samuel Beckett",
    source: "The Unnamable",
    tags: ["exhaustion", "courage", "defiance"],
  },
  {
    id: 91,
    text: "Try again. Fail again. Fail better.",
    author: "Samuel Beckett",
    source: "Worstward Ho",
    tags: ["courage", "exhaustion"],
  },

  // ── Robert Walser ───────────────────────────────────────────────
  {
    id: 92,
    text: "We don't need to see anything out of the ordinary. We already see so much.",
    author: "Robert Walser",
    source: "The Walk",
    tags: ["wonder", "acceptance"],
  },

  // ── Thoreau ─────────────────────────────────────────────────────
  {
    id: 93,
    text: "The mass of men lead lives of quiet desperation.",
    author: "Henry David Thoreau",
    source: "Walden",
    tags: ["melancholy", "lucidity", "emptiness"],
  },

  // ── Audre Lorde ─────────────────────────────────────────────────
  {
    id: 94,
    text: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.",
    author: "Audre Lorde",
    source: "A Burst of Light",
    tags: ["defiance", "tenderness", "exhaustion"],
  },

  // ── Toni Morrison ───────────────────────────────────────────────
  {
    id: 95,
    text: "You wanna fly, you got to give up the shit that weighs you down.",
    author: "Toni Morrison",
    source: "Song of Solomon",
    tags: ["defiance", "courage", "acceptance"],
  },
  {
    id: 96,
    text: "Anything dead coming back to life hurts.",
    author: "Toni Morrison",
    source: "Beloved",
    tags: ["grief", "courage"],
  },

  // ── Ocean Vuong ─────────────────────────────────────────────────
  {
    id: 97,
    text: "Too much joy, I swear, is lost in our desperation to keep it.",
    author: "Ocean Vuong",
    source: "On Earth We're Briefly Gorgeous",
    tags: ["longing", "lucidity", "tenderness"],
  },
  {
    id: 98,
    text: "Sometimes being offered tenderness feels like the very proof that you've been ruined.",
    author: "Ocean Vuong",
    source: "On Earth We're Briefly Gorgeous",
    tags: ["tenderness", "grief", "loneliness"],
  },

  // ── Marina Tsvetaeva ────────────────────────────────────────────
  {
    id: 99,
    text: "What is the chief thing in life? To live and not be afraid.",
    author: "Marina Tsvetaeva",
    tags: ["courage", "fear"],
  },

  // ── Hannah Arendt ───────────────────────────────────────────────
  {
    id: 100,
    text: "Forgiveness is the only reaction which does not merely re-act but acts anew and unexpectedly.",
    author: "Hannah Arendt",
    source: "The Human Condition",
    tags: ["tenderness", "acceptance"],
  },
];
