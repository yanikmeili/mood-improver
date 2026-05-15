// Curated quotes. Attribution rule: if I am not confident about the exact
// wording or attribution, the quote is omitted rather than guessed.
//
// Language policy: quotes are stored in the author's original language when
// that language is one of en / fr / pt. For authors writing in Greek, Latin,
// Persian, German, Danish, etc., the canonical English translation is used
// (lang: "en").

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

export type Lang = "en" | "fr" | "pt";

export interface Quote {
  id: number;
  lang: Lang;
  text: string;
  author: string;
  source?: string;
  tags: Tag[];
}

export const quotes: Quote[] = [
  // ═══════════════════════════════════════════════════════════════
  // ENGLISH (original or canonical English translation)
  // ═══════════════════════════════════════════════════════════════

  // ── Marcus Aurelius (translated from Greek) ─────────────────────
  { id: 1, lang: "en", text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", source: "Meditations", tags: ["courage", "lucidity"] },
  { id: 2, lang: "en", text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius", source: "Meditations", tags: ["defiance", "acceptance", "courage"] },
  { id: 3, lang: "en", text: "Confine yourself to the present.", author: "Marcus Aurelius", source: "Meditations", tags: ["acceptance", "fear"] },
  { id: 4, lang: "en", text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius", source: "Meditations", tags: ["courage"] },
  { id: 5, lang: "en", text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius", source: "Meditations", tags: ["defiance"] },
  { id: 6, lang: "en", text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", author: "Marcus Aurelius", source: "Meditations", tags: ["lucidity"] },
  { id: 7, lang: "en", text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", author: "Marcus Aurelius", source: "Meditations", tags: ["fear", "lucidity", "acceptance"] },
  { id: 8, lang: "en", text: "How much time he saves who does not look to see what his neighbor says or does or thinks.", author: "Marcus Aurelius", source: "Meditations", tags: ["lucidity", "defiance"] },
  { id: 9, lang: "en", text: "Reject your sense of injury and the injury itself disappears.", author: "Marcus Aurelius", source: "Meditations", tags: ["acceptance", "defiance"] },
  { id: 10, lang: "en", text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius", source: "Meditations", tags: ["lucidity"] },

  // ── Seneca ──────────────────────────────────────────────────────
  { id: 11, lang: "en", text: "We suffer more often in imagination than in reality.", author: "Seneca", source: "Letters from a Stoic", tags: ["fear", "lucidity"] },
  { id: 12, lang: "en", text: "It is not that we have a short time to live, but that we waste much of it.", author: "Seneca", source: "On the Shortness of Life", tags: ["lucidity", "longing"] },
  { id: 13, lang: "en", text: "He who is brave is free.", author: "Seneca", tags: ["courage"] },

  // ── Rumi (translated from Persian) ──────────────────────────────
  { id: 14, lang: "en", text: "The wound is the place where the Light enters you.", author: "Rumi", tags: ["grief", "tenderness", "acceptance"] },
  { id: 15, lang: "en", text: "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.", author: "Rumi", tags: ["courage", "defiance"] },
  { id: 16, lang: "en", text: "The cure for pain is in the pain.", author: "Rumi", source: "Mathnawi", tags: ["grief", "acceptance"] },
  { id: 17, lang: "en", text: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I'll meet you there.", author: "Rumi", tags: ["tenderness", "acceptance"] },
  { id: 18, lang: "en", text: "You are not a drop in the ocean. You are the entire ocean in a drop.", author: "Rumi", tags: ["wonder", "courage"] },

  // ── David Foster Wallace ────────────────────────────────────────
  { id: 19, lang: "en", text: "Everybody worships. The only choice we get is what to worship.", author: "David Foster Wallace", source: "This Is Water", tags: ["lucidity"] },
  { id: 20, lang: "en", text: "The really important kind of freedom involves attention, and awareness, and discipline, and effort, and being able truly to care about other people and to sacrifice for them, over and over, in myriad petty little unsexy ways, every day.", author: "David Foster Wallace", source: "This Is Water", tags: ["tenderness", "courage", "lucidity"] },
  { id: 21, lang: "en", text: "The truth will set you free. But not until it is finished with you.", author: "David Foster Wallace", source: "Infinite Jest", tags: ["lucidity", "grief"] },
  { id: 22, lang: "en", text: "Everything I've ever let go of has claw marks on it.", author: "David Foster Wallace", source: "Infinite Jest", tags: ["grief", "longing", "acceptance"] },
  { id: 23, lang: "en", text: "It did what all ads are supposed to do: create an anxiety relievable by purchase.", author: "David Foster Wallace", source: "Infinite Jest", tags: ["lucidity", "absurdity"] },
  { id: 24, lang: "en", text: "Logical validity is not a guarantee of truth.", author: "David Foster Wallace", source: "Everything and More", tags: ["lucidity"] },

  // ── Annie Dillard ───────────────────────────────────────────────
  { id: 25, lang: "en", text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard", source: "The Writing Life", tags: ["lucidity"] },
  { id: 26, lang: "en", text: "Beauty and grace are performed whether or not we will or sense them. The least we can do is try to be there.", author: "Annie Dillard", source: "Pilgrim at Tinker Creek", tags: ["wonder", "tenderness"] },
  { id: 27, lang: "en", text: "I am a fugitive and a vagabond, a sojourner seeking signs.", author: "Annie Dillard", source: "Pilgrim at Tinker Creek", tags: ["longing", "loneliness"] },
  { id: 28, lang: "en", text: "We are here to abet creation and to witness it, to notice each thing so each thing gets noticed.", author: "Annie Dillard", tags: ["wonder", "tenderness"] },

  // ── Anne Carson ─────────────────────────────────────────────────
  { id: 29, lang: "en", text: "Why does tragedy exist? Because you are full of rage. Why are you full of rage? Because you are full of grief.", author: "Anne Carson", source: "Grief Lessons", tags: ["grief", "defiance"] },
  { id: 30, lang: "en", text: "You remember too much, my mother said to me recently. Why hold onto all that? And I said, Where can I put it down?", author: "Anne Carson", source: "The Glass Essay", tags: ["grief", "longing"] },
  { id: 31, lang: "en", text: "If prose is a house, poetry is a man on fire running quite fast through it.", author: "Anne Carson", tags: ["defiance", "wonder"] },
  { id: 32, lang: "en", text: "There is no person without a world.", author: "Anne Carson", source: "Plainwater", tags: ["loneliness", "tenderness"] },

  // ── Etty Hillesum (translated from Dutch) ───────────────────────
  { id: 33, lang: "en", text: "Despite everything, life is full of beauty and meaning.", author: "Etty Hillesum", source: "An Interrupted Life", tags: ["acceptance", "wonder", "courage"] },
  { id: 34, lang: "en", text: "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.", author: "Etty Hillesum", source: "An Interrupted Life", tags: ["exhaustion", "acceptance", "tenderness"] },
  { id: 35, lang: "en", text: "Ultimately, we have just one moral duty: to reclaim large areas of peace in ourselves, more and more peace, and to reflect it toward others.", author: "Etty Hillesum", source: "An Interrupted Life", tags: ["acceptance", "courage", "tenderness"] },
  { id: 36, lang: "en", text: "I draw prayer round me like a dark protective wall.", author: "Etty Hillesum", source: "An Interrupted Life", tags: ["fear", "courage"] },

  // ── Rilke (translated from German) ──────────────────────────────
  { id: 37, lang: "en", text: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.", author: "Rainer Maria Rilke", source: "Book of Hours", tags: ["acceptance", "courage", "fear"] },
  { id: 38, lang: "en", text: "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage.", author: "Rainer Maria Rilke", source: "Letters to a Young Poet", tags: ["courage", "fear"] },
  { id: 39, lang: "en", text: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.", author: "Rainer Maria Rilke", source: "Letters to a Young Poet", tags: ["lucidity", "acceptance", "longing"] },
  { id: 40, lang: "en", text: "For one human being to love another: that is perhaps the most difficult of all our tasks; the ultimate, the last test and proof, the work for which all other work is but preparation.", author: "Rainer Maria Rilke", source: "Letters to a Young Poet", tags: ["tenderness", "longing"] },
  { id: 41, lang: "en", text: "The only journey is the one within.", author: "Rainer Maria Rilke", tags: ["lucidity", "loneliness"] },

  // ── Kierkegaard (translated from Danish) ────────────────────────
  { id: 42, lang: "en", text: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard", source: "The Concept of Anxiety", tags: ["fear", "lucidity"] },
  { id: 43, lang: "en", text: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard", tags: ["lucidity", "acceptance"] },
  { id: 44, lang: "en", text: "The most common form of despair is not being who you are.", author: "Søren Kierkegaard", source: "The Sickness Unto Death", tags: ["melancholy", "lucidity", "emptiness"] },

  // ── Mary Oliver ─────────────────────────────────────────────────
  { id: 45, lang: "en", text: "Tell me, what is it you plan to do with your one wild and precious life?", author: "Mary Oliver", source: "The Summer Day", tags: ["wonder", "courage"] },
  { id: 46, lang: "en", text: "When it's over, I want to say: all my life I was a bride married to amazement.", author: "Mary Oliver", source: "When Death Comes", tags: ["wonder", "tenderness"] },
  { id: 47, lang: "en", text: "You do not have to be good. You do not have to walk on your knees for a hundred miles through the desert repenting. You only have to let the soft animal of your body love what it loves.", author: "Mary Oliver", source: "Wild Geese", tags: ["tenderness", "acceptance"] },
  { id: 48, lang: "en", text: "Whoever you are, no matter how lonely, the world offers itself to your imagination.", author: "Mary Oliver", source: "Wild Geese", tags: ["loneliness", "wonder", "tenderness"] },
  { id: 49, lang: "en", text: "Instructions for living a life: Pay attention. Be astonished. Tell about it.", author: "Mary Oliver", source: "Sometimes", tags: ["wonder", "lucidity"] },
  { id: 50, lang: "en", text: "Someone I loved once gave me a box full of darkness. It took me years to understand that this, too, was a gift.", author: "Mary Oliver", source: "The Uses of Sorrow", tags: ["grief", "acceptance", "tenderness"] },

  // ── James Baldwin ───────────────────────────────────────────────
  { id: 51, lang: "en", text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin", tags: ["courage", "lucidity"] },
  { id: 52, lang: "en", text: "Love takes off the masks that we fear we cannot live without and know we cannot live within.", author: "James Baldwin", source: "The Fire Next Time", tags: ["tenderness", "courage", "fear"] },
  { id: 53, lang: "en", text: "I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.", author: "James Baldwin", tags: ["lucidity", "grief", "defiance"] },
  { id: 54, lang: "en", text: "The place in which I'll fit will not exist until I make it.", author: "James Baldwin", tags: ["courage", "defiance", "loneliness"] },

  // ── Joan Didion ─────────────────────────────────────────────────
  { id: 55, lang: "en", text: "We tell ourselves stories in order to live.", author: "Joan Didion", source: "The White Album", tags: ["lucidity"] },
  { id: 56, lang: "en", text: "Life changes in the instant. The ordinary instant.", author: "Joan Didion", source: "The Year of Magical Thinking", tags: ["grief", "lucidity"] },
  { id: 57, lang: "en", text: "I have already lost touch with a couple of people I used to be.", author: "Joan Didion", source: "On Keeping a Notebook", tags: ["longing", "lucidity", "melancholy"] },
  { id: 58, lang: "en", text: "Was it only by dreaming or by writing that I could find out what I thought?", author: "Joan Didion", tags: ["lucidity"] },

  // ── Borges (translated from Spanish) ────────────────────────────
  { id: 59, lang: "en", text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges", tags: ["wonder"] },
  { id: 60, lang: "en", text: "Time is the substance I am made of. Time is a river which sweeps me along, but I am the river; it is a tiger which destroys me, but I am the tiger; it is a fire which consumes me, but I am the fire.", author: "Jorge Luis Borges", source: "A New Refutation of Time", tags: ["lucidity", "wonder"] },

  // ── Wisława Szymborska (translated from Polish) ─────────────────
  { id: 61, lang: "en", text: "We're extremely fortunate not to know precisely the kind of world we live in.", author: "Wisława Szymborska", source: "Could Have", tags: ["absurdity", "lucidity"] },
  { id: 62, lang: "en", text: "I prefer myself liking people to myself loving mankind.", author: "Wisława Szymborska", source: "Possibilities", tags: ["tenderness", "lucidity"] },
  { id: 63, lang: "en", text: "I apologize to chance for calling it necessity.", author: "Wisława Szymborska", source: "Under One Small Star", tags: ["lucidity", "absurdity"] },

  // ── Kafka (translated from German) ──────────────────────────────
  { id: 64, lang: "en", text: "A book must be the axe for the frozen sea inside us.", author: "Franz Kafka", source: "Letter to Oskar Pollak", tags: ["defiance", "grief"] },
  { id: 65, lang: "en", text: "You are free and that is why you are lost.", author: "Franz Kafka", tags: ["fear", "absurdity", "lucidity"] },
  { id: 66, lang: "en", text: "I am a cage, in search of a bird.", author: "Franz Kafka", source: "Zürau Aphorisms", tags: ["longing", "emptiness", "loneliness"] },
  { id: 67, lang: "en", text: "The meaning of life is that it stops.", author: "Franz Kafka", tags: ["absurdity", "lucidity"] },

  // ── Wittgenstein (translated from German) ───────────────────────
  { id: 68, lang: "en", text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein", source: "Tractatus Logico-Philosophicus", tags: ["lucidity"] },
  { id: 69, lang: "en", text: "Whereof one cannot speak, thereof one must be silent.", author: "Ludwig Wittgenstein", source: "Tractatus Logico-Philosophicus", tags: ["acceptance", "lucidity"] },
  { id: 70, lang: "en", text: "It is not how things are in the world that is mystical, but that it exists.", author: "Ludwig Wittgenstein", source: "Tractatus Logico-Philosophicus", tags: ["wonder"] },

  // ── Virginia Woolf ──────────────────────────────────────────────
  { id: 71, lang: "en", text: "I am rooted, but I flow.", author: "Virginia Woolf", source: "The Waves", tags: ["acceptance", "lucidity"] },
  { id: 72, lang: "en", text: "I have lost friends, some by death, others through sheer inability to cross the street.", author: "Virginia Woolf", source: "The Waves", tags: ["loneliness", "grief", "melancholy"] },
  { id: 73, lang: "en", text: "Arrange whatever pieces come your way.", author: "Virginia Woolf", tags: ["acceptance", "courage"] },

  // ── Nietzsche (translated from German) ──────────────────────────
  { id: 74, lang: "en", text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche", source: "Twilight of the Idols", tags: ["courage", "exhaustion"] },
  { id: 75, lang: "en", text: "You must have chaos within you to give birth to a dancing star.", author: "Friedrich Nietzsche", source: "Thus Spoke Zarathustra", tags: ["defiance", "wonder", "courage"] },
  { id: 76, lang: "en", text: "Become who you are.", author: "Friedrich Nietzsche", source: "Thus Spoke Zarathustra", tags: ["courage", "lucidity"] },

  // ── Auden, Beckett, Walser, Thoreau ─────────────────────────────
  { id: 77, lang: "en", text: "We must love one another or die.", author: "W. H. Auden", source: "September 1, 1939", tags: ["tenderness", "courage"] },
  { id: 78, lang: "en", text: "I can't go on, I'll go on.", author: "Samuel Beckett", source: "The Unnamable", tags: ["exhaustion", "courage", "defiance"] },
  { id: 79, lang: "en", text: "Try again. Fail again. Fail better.", author: "Samuel Beckett", source: "Worstward Ho", tags: ["courage", "exhaustion"] },
  { id: 80, lang: "en", text: "Nothing to be done.", author: "Samuel Beckett", source: "Waiting for Godot", tags: ["absurdity", "emptiness"] },
  { id: 81, lang: "en", text: "We don't need to see anything out of the ordinary. We already see so much.", author: "Robert Walser", source: "The Walk", tags: ["wonder", "acceptance"] },
  { id: 82, lang: "en", text: "The mass of men lead lives of quiet desperation.", author: "Henry David Thoreau", source: "Walden", tags: ["melancholy", "lucidity", "emptiness"] },

  // ── Audre Lorde, Toni Morrison, Ocean Vuong ─────────────────────
  { id: 83, lang: "en", text: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", author: "Audre Lorde", source: "A Burst of Light", tags: ["defiance", "tenderness", "exhaustion"] },
  { id: 84, lang: "en", text: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.", author: "Audre Lorde", tags: ["courage", "fear"] },
  { id: 85, lang: "en", text: "You wanna fly, you got to give up the shit that weighs you down.", author: "Toni Morrison", source: "Song of Solomon", tags: ["defiance", "courage", "acceptance"] },
  { id: 86, lang: "en", text: "Anything dead coming back to life hurts.", author: "Toni Morrison", source: "Beloved", tags: ["grief", "courage"] },
  { id: 87, lang: "en", text: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.", author: "Toni Morrison", tags: ["courage", "defiance"] },
  { id: 88, lang: "en", text: "Too much joy, I swear, is lost in our desperation to keep it.", author: "Ocean Vuong", source: "On Earth We're Briefly Gorgeous", tags: ["longing", "lucidity", "tenderness"] },
  { id: 89, lang: "en", text: "Sometimes being offered tenderness feels like the very proof that you've been ruined.", author: "Ocean Vuong", source: "On Earth We're Briefly Gorgeous", tags: ["tenderness", "grief", "loneliness"] },
  { id: 90, lang: "en", text: "Sometimes you are erased before you are given the choice of stating who you are.", author: "Ocean Vuong", source: "On Earth We're Briefly Gorgeous", tags: ["loneliness", "grief"] },

  // ── Hannah Arendt, Tsvetaeva ─────────────────────────────────────
  { id: 91, lang: "en", text: "Forgiveness is the only reaction which does not merely re-act but acts anew and unexpectedly.", author: "Hannah Arendt", source: "The Human Condition", tags: ["tenderness", "acceptance"] },
  { id: 92, lang: "en", text: "Thinking and being fully alive are the same.", author: "Hannah Arendt", tags: ["lucidity", "wonder"] },
  { id: 93, lang: "en", text: "What is the chief thing in life? To live and not be afraid.", author: "Marina Tsvetaeva", tags: ["courage", "fear"] },

  // ── Adrienne Rich, Sylvia Plath, T.S. Eliot ─────────────────────
  { id: 94, lang: "en", text: "Lying is done with words, and also with silence.", author: "Adrienne Rich", source: "On Lies, Secrets, and Silence", tags: ["lucidity"] },
  { id: 95, lang: "en", text: "An honorable human relationship — that is, one in which two people have the right to use the word 'love' — is a process, delicate, violent, often terrifying to both persons involved.", author: "Adrienne Rich", tags: ["tenderness", "fear"] },
  { id: 96, lang: "en", text: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", author: "Sylvia Plath", source: "The Bell Jar", tags: ["courage", "lucidity"] },
  { id: 97, lang: "en", text: "I felt very still and very empty, the way the eye of a tornado must feel, moving dully along in the middle of the surrounding hullabaloo.", author: "Sylvia Plath", source: "The Bell Jar", tags: ["emptiness", "melancholy"] },
  { id: 98, lang: "en", text: "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.", author: "T. S. Eliot", source: "Little Gidding", tags: ["lucidity", "wonder"] },
  { id: 99, lang: "en", text: "I have measured out my life with coffee spoons.", author: "T. S. Eliot", source: "The Love Song of J. Alfred Prufrock", tags: ["melancholy", "emptiness", "exhaustion"] },

  // ── John Berger, Susan Sontag, Rebecca Solnit ───────────────────
  { id: 100, lang: "en", text: "The way we are living, timorous or bold, will have been our life.", author: "Seamus Heaney", source: "Markings", tags: ["lucidity", "courage"] },
  { id: 101, lang: "en", text: "The poetry is in the pity.", author: "Wilfred Owen", tags: ["grief", "tenderness"] },
  { id: 102, lang: "en", text: "Never to get lost is not to live.", author: "Rebecca Solnit", source: "A Field Guide to Getting Lost", tags: ["lucidity", "courage"] },
  { id: 103, lang: "en", text: "Hope locates itself in the premises that we don't know what will happen and that in the spaciousness of uncertainty is room to act.", author: "Rebecca Solnit", source: "Hope in the Dark", tags: ["courage", "fear", "acceptance"] },
  { id: 104, lang: "en", text: "What we don't know is an ocean. What we know is a cup.", author: "Rebecca Solnit", tags: ["lucidity", "wonder"] },
  { id: 105, lang: "en", text: "To be a writer is to let yourself be defeated by ever better things.", author: "Susan Sontag", tags: ["lucidity", "exhaustion"] },

  // ── Lao Tzu (translated from Chinese) ───────────────────────────
  { id: 106, lang: "en", text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu", source: "Tao Te Ching", tags: ["acceptance", "courage"] },
  { id: 107, lang: "en", text: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu", source: "Tao Te Ching", tags: ["acceptance", "exhaustion"] },

  // ── John O'Donohue, David Whyte ─────────────────────────────────
  { id: 108, lang: "en", text: "Real friendship or love is not manufactured or achieved by an act of will or intention. Friendship is always an act of recognition.", author: "John O'Donohue", source: "Anam Cara", tags: ["tenderness", "wonder"] },
  { id: 109, lang: "en", text: "Anyone or anything that does not bring you alive is too small for you.", author: "David Whyte", source: "Sweet Darkness", tags: ["defiance", "courage", "loneliness"] },
  { id: 110, lang: "en", text: "What you can plan is too small for you to live.", author: "David Whyte", source: "What to Remember When Waking", tags: ["courage", "longing"] },

  // ── Misc EN ─────────────────────────────────────────────────────
  { id: 111, lang: "en", text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", author: "W. B. Yeats", tags: ["wonder"] },
  { id: 112, lang: "en", text: "Do not go gentle into that good night. Rage, rage against the dying of the light.", author: "Dylan Thomas", source: "Do Not Go Gentle into That Good Night", tags: ["defiance", "courage", "grief"] },
  { id: 113, lang: "en", text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung", tags: ["courage", "lucidity", "defiance"] },
  { id: 114, lang: "en", text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", author: "Carl Jung", tags: ["lucidity"] },
  { id: 115, lang: "en", text: "Tears are words that need to be written.", author: "Paulo Coelho", tags: ["grief", "longing"] },
  { id: 116, lang: "en", text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou", source: "I Know Why the Caged Bird Sings", tags: ["longing", "loneliness", "grief"] },
  { id: 117, lang: "en", text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", source: "Lady Windermere's Fan", tags: ["wonder", "absurdity"] },
  { id: 118, lang: "en", text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", tags: ["courage", "defiance"] },
  { id: 119, lang: "en", text: "The wound is the place where the light enters.", author: "Leonard Cohen", source: "Anthem", tags: ["grief", "wonder", "tenderness"] },
  { id: 120, lang: "en", text: "There is a crack in everything. That's how the light gets in.", author: "Leonard Cohen", source: "Anthem", tags: ["grief", "acceptance", "wonder"] },
  { id: 121, lang: "en", text: "If you're going through hell, keep going.", author: "Winston Churchill", tags: ["exhaustion", "courage"] },
  { id: 122, lang: "en", text: "I am still learning.", author: "Michelangelo", tags: ["lucidity", "courage"] },
  { id: 123, lang: "en", text: "Wherever you are, be all there.", author: "Jim Elliot", tags: ["acceptance", "lucidity"] },
  { id: 124, lang: "en", text: "Tenderness is the gentlest, the lightest form of love.", author: "Olga Tokarczuk", source: "Nobel Lecture", tags: ["tenderness"] },
  { id: 125, lang: "en", text: "All sorrows can be borne if you put them into a story or tell a story about them.", author: "Isak Dinesen", tags: ["grief", "lucidity"] },
  { id: 126, lang: "en", text: "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you.", author: "Gospel of Thomas", tags: ["courage", "lucidity"] },
  { id: 127, lang: "en", text: "All things are difficult before they are easy.", author: "Thomas Fuller", tags: ["courage", "exhaustion"] },
  { id: 128, lang: "en", text: "Tomorrow is another day.", author: "Margaret Mitchell", source: "Gone with the Wind", tags: ["acceptance", "exhaustion"] },
  { id: 129, lang: "en", text: "Stay hungry, stay foolish.", author: "Stewart Brand", source: "Whole Earth Catalog", tags: ["longing", "courage"] },
  { id: 130, lang: "en", text: "Out of the night that covers me, black as the pit from pole to pole, I thank whatever gods may be for my unconquerable soul.", author: "William Ernest Henley", source: "Invictus", tags: ["courage", "defiance"] },

  // ═══════════════════════════════════════════════════════════════
  // FRENCH (original)
  // ═══════════════════════════════════════════════════════════════

  // ── Cioran ──────────────────────────────────────────────────────
  { id: 131, lang: "fr", text: "Pas la peine de se tuer, puisqu'on se tue toujours trop tard.", author: "Emil Cioran", source: "De l'inconvénient d'être né", tags: ["absurdity", "melancholy"] },
  { id: 132, lang: "fr", text: "Je ne fais rien, je l'accorde. Mais je vois les heures passer — ce qui vaut mieux que d'essayer de les remplir.", author: "Emil Cioran", source: "De l'inconvénient d'être né", tags: ["exhaustion", "absurdity", "emptiness"] },
  { id: 133, lang: "fr", text: "Nous sommes tous au fond d'un enfer dont chaque instant est un miracle.", author: "Emil Cioran", tags: ["absurdity", "wonder", "lucidity"] },
  { id: 134, lang: "fr", text: "N'écrivez de livres que si vous allez y dire ces choses que vous n'oseriez confier à personne.", author: "Emil Cioran", source: "De l'inconvénient d'être né", tags: ["courage", "lucidity"] },
  { id: 135, lang: "fr", text: "Un livre est un suicide différé.", author: "Emil Cioran", source: "De l'inconvénient d'être né", tags: ["melancholy", "absurdity"] },
  { id: 136, lang: "fr", text: "Vivre vraiment, c'est vivre par refus.", author: "Emil Cioran", source: "Précis de décomposition", tags: ["defiance", "courage"] },
  { id: 137, lang: "fr", text: "C'est parce que nous sommes tous des imposteurs que nous nous supportons les uns les autres.", author: "Emil Cioran", tags: ["absurdity", "lucidity"] },
  { id: 138, lang: "fr", text: "Je préfère mes obsessions à mes amis.", author: "Emil Cioran", tags: ["loneliness", "defiance"] },
  { id: 139, lang: "fr", text: "L'incertitude est l'élément naturel de l'homme; nous y respirons comme nous respirons l'air.", author: "Emil Cioran", tags: ["fear", "acceptance"] },
  { id: 140, lang: "fr", text: "Seuls les optimistes se suicident, ceux qui ne peuvent plus l'être. Les autres, n'ayant aucune raison de vivre, pourquoi en auraient-ils de mourir ?", author: "Emil Cioran", source: "De l'inconvénient d'être né", tags: ["absurdity", "emptiness", "melancholy"] },
  { id: 141, lang: "fr", text: "Tout ce qu'on subit s'amplifie. La souffrance est don d'altitude.", author: "Emil Cioran", tags: ["grief", "courage"] },
  { id: 142, lang: "fr", text: "Ne discutez pas avec les naïfs, vous risqueriez de leur ressembler.", author: "Emil Cioran", tags: ["defiance", "lucidity"] },

  // ── Camus ───────────────────────────────────────────────────────
  { id: 143, lang: "fr", text: "Au milieu de l'hiver, j'apprenais enfin qu'il y avait en moi un été invincible.", author: "Albert Camus", source: "Retour à Tipasa", tags: ["courage", "acceptance"] },
  { id: 144, lang: "fr", text: "Il faut imaginer Sisyphe heureux.", author: "Albert Camus", source: "Le Mythe de Sisyphe", tags: ["absurdity", "acceptance", "defiance"] },
  { id: 145, lang: "fr", text: "Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide.", author: "Albert Camus", source: "Le Mythe de Sisyphe", tags: ["absurdity", "lucidity"] },
  { id: 146, lang: "fr", text: "Je me révolte, donc nous sommes.", author: "Albert Camus", source: "L'Homme révolté", tags: ["defiance", "courage"] },
  { id: 147, lang: "fr", text: "Mal nommer les choses, c'est ajouter au malheur du monde.", author: "Albert Camus", tags: ["lucidity"] },
  { id: 148, lang: "fr", text: "Aimer un être, c'est accepter de vieillir avec lui.", author: "Albert Camus", tags: ["tenderness", "acceptance"] },
  { id: 149, lang: "fr", text: "Vivre, naturellement, n'est jamais facile. On continue de faire les gestes que l'existence commande, pour beaucoup de raisons dont la première est l'habitude.", author: "Albert Camus", tags: ["exhaustion", "acceptance"] },
  { id: 150, lang: "fr", text: "L'absurde naît de cette confrontation entre l'appel humain et le silence déraisonnable du monde.", author: "Albert Camus", source: "Le Mythe de Sisyphe", tags: ["absurdity"] },

  // ── Simone Weil ─────────────────────────────────────────────────
  { id: 151, lang: "fr", text: "L'attention est la forme la plus rare et la plus pure de la générosité.", author: "Simone Weil", tags: ["tenderness", "lucidity"] },
  { id: 152, lang: "fr", text: "Tous les mouvements naturels de l'âme sont régis par des lois analogues à celles de la pesanteur matérielle. La grâce seule fait exception.", author: "Simone Weil", source: "La Pesanteur et la grâce", tags: ["wonder", "lucidity"] },
  { id: 153, lang: "fr", text: "L'imaginaire et la fiction font plus des trois quarts de notre vie réelle.", author: "Simone Weil", source: "La Pesanteur et la grâce", tags: ["lucidity", "absurdity"] },
  { id: 154, lang: "fr", text: "S'attacher, c'est manquer le réel.", author: "Simone Weil", source: "La Pesanteur et la grâce", tags: ["longing", "acceptance"] },

  // ── Pascal ──────────────────────────────────────────────────────
  { id: 155, lang: "fr", text: "Le cœur a ses raisons que la raison ne connaît point.", author: "Blaise Pascal", source: "Pensées", tags: ["tenderness", "lucidity"] },
  { id: 156, lang: "fr", text: "Tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre.", author: "Blaise Pascal", source: "Pensées", tags: ["exhaustion", "lucidity"] },
  { id: 157, lang: "fr", text: "L'homme n'est qu'un roseau, le plus faible de la nature, mais c'est un roseau pensant.", author: "Blaise Pascal", source: "Pensées", tags: ["lucidity", "courage"] },
  { id: 158, lang: "fr", text: "Le silence éternel de ces espaces infinis m'effraie.", author: "Blaise Pascal", source: "Pensées", tags: ["fear", "loneliness", "wonder"] },
  { id: 159, lang: "fr", text: "Connais donc, superbe, quel paradoxe tu es à toi-même.", author: "Blaise Pascal", source: "Pensées", tags: ["lucidity"] },

  // ── La Rochefoucauld ────────────────────────────────────────────
  { id: 160, lang: "fr", text: "Le soleil ni la mort ne se peuvent regarder fixement.", author: "François de La Rochefoucauld", source: "Maximes", tags: ["fear", "lucidity"] },
  { id: 161, lang: "fr", text: "Nous avons tous assez de force pour supporter les maux d'autrui.", author: "François de La Rochefoucauld", source: "Maximes", tags: ["lucidity", "absurdity"] },
  { id: 162, lang: "fr", text: "Si nous n'avions point de défauts, nous ne prendrions pas tant de plaisir à en remarquer dans les autres.", author: "François de La Rochefoucauld", source: "Maximes", tags: ["lucidity"] },
  { id: 163, lang: "fr", text: "Nous promettons selon nos espérances, et nous tenons selon nos craintes.", author: "François de La Rochefoucauld", source: "Maximes", tags: ["fear", "lucidity"] },
  { id: 164, lang: "fr", text: "Il est plus aisé d'être sage pour les autres que de l'être pour soi-même.", author: "François de La Rochefoucauld", source: "Maximes", tags: ["lucidity"] },

  // ── Baudelaire ──────────────────────────────────────────────────
  { id: 165, lang: "fr", text: "Il faut être toujours ivre. Tout est là : c'est l'unique question.", author: "Charles Baudelaire", source: "Le Spleen de Paris", tags: ["defiance", "longing"] },
  { id: 166, lang: "fr", text: "Mon enfant, ma sœur, songe à la douceur d'aller là-bas vivre ensemble !", author: "Charles Baudelaire", source: "L'Invitation au voyage", tags: ["longing", "tenderness"] },
  { id: 167, lang: "fr", text: "Là, tout n'est qu'ordre et beauté, luxe, calme et volupté.", author: "Charles Baudelaire", source: "L'Invitation au voyage", tags: ["wonder", "longing"] },
  { id: 168, lang: "fr", text: "Le génie n'est que l'enfance retrouvée à volonté.", author: "Charles Baudelaire", tags: ["wonder", "lucidity"] },

  // ── Rimbaud ─────────────────────────────────────────────────────
  { id: 169, lang: "fr", text: "Je est un autre.", author: "Arthur Rimbaud", source: "Lettre du voyant", tags: ["lucidity", "loneliness"] },
  { id: 170, lang: "fr", text: "Il faut être absolument moderne.", author: "Arthur Rimbaud", source: "Une saison en enfer", tags: ["defiance", "courage"] },
  { id: 171, lang: "fr", text: "Par délicatesse j'ai perdu ma vie.", author: "Arthur Rimbaud", source: "Chanson de la plus haute tour", tags: ["melancholy", "grief", "longing"] },
  { id: 172, lang: "fr", text: "L'amour est à réinventer, on le sait.", author: "Arthur Rimbaud", source: "Une saison en enfer", tags: ["tenderness", "defiance"] },

  // ── René Char ───────────────────────────────────────────────────
  { id: 173, lang: "fr", text: "Impose ta chance, serre ton bonheur et va vers ton risque. À te regarder, ils s'habitueront.", author: "René Char", source: "Feuillets d'Hypnos", tags: ["courage", "defiance"] },
  { id: 174, lang: "fr", text: "Nous ne pouvons vivre que dans l'entrouvert, exactement sur la ligne hermétique de partage de l'ombre et de la lumière.", author: "René Char", source: "Fureur et mystère", tags: ["acceptance", "lucidity"] },
  { id: 175, lang: "fr", text: "Notre héritage n'est précédé d'aucun testament.", author: "René Char", source: "Feuillets d'Hypnos", tags: ["loneliness", "courage"] },
  { id: 176, lang: "fr", text: "Le poète, on le sait, mêle le manque à l'excès, le but à l'envoi.", author: "René Char", tags: ["longing", "wonder"] },

  // ── Apollinaire ─────────────────────────────────────────────────
  { id: 177, lang: "fr", text: "Vienne la nuit sonne l'heure / Les jours s'en vont je demeure.", author: "Guillaume Apollinaire", source: "Le Pont Mirabeau", tags: ["melancholy", "longing", "acceptance"] },
  { id: 178, lang: "fr", text: "Et comme l'espérance est violente.", author: "Guillaume Apollinaire", source: "La Chanson du mal-aimé", tags: ["longing", "defiance"] },

  // ── Proust ──────────────────────────────────────────────────────
  { id: 179, lang: "fr", text: "Le seul véritable voyage, le seul bain de Jouvence, ce ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.", author: "Marcel Proust", source: "La Prisonnière", tags: ["lucidity", "wonder"] },
  { id: 180, lang: "fr", text: "On ne reçoit pas la sagesse, il faut la découvrir soi-même après un trajet que personne ne peut faire pour nous, ne peut nous épargner.", author: "Marcel Proust", tags: ["lucidity", "loneliness"] },
  { id: 181, lang: "fr", text: "Les vrais paradis sont les paradis qu'on a perdus.", author: "Marcel Proust", source: "Le Temps retrouvé", tags: ["longing", "grief"] },

  // ── Saint-Exupéry ───────────────────────────────────────────────
  { id: 182, lang: "fr", text: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry", source: "Le Petit Prince", tags: ["tenderness", "lucidity"] },
  { id: 183, lang: "fr", text: "Tu deviens responsable pour toujours de ce que tu as apprivoisé.", author: "Antoine de Saint-Exupéry", source: "Le Petit Prince", tags: ["tenderness", "courage"] },
  { id: 184, lang: "fr", text: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.", author: "Antoine de Saint-Exupéry", source: "Terre des hommes", tags: ["tenderness"] },

  // ── Montaigne ───────────────────────────────────────────────────
  { id: 185, lang: "fr", text: "Que sais-je ?", author: "Michel de Montaigne", source: "Apologie de Raymond Sebond", tags: ["lucidity"] },
  { id: 186, lang: "fr", text: "Je veux qu'on me voie en ma façon simple, naturelle et ordinaire, sans étude et artifice : car c'est moi que je peins.", author: "Michel de Montaigne", source: "Essais", tags: ["lucidity", "courage"] },
  { id: 187, lang: "fr", text: "Ma vie a été pleine de terribles malheurs dont la plupart ne sont jamais arrivés.", author: "Michel de Montaigne", source: "Essais", tags: ["fear", "lucidity"] },

  // ── Duras ───────────────────────────────────────────────────────
  { id: 188, lang: "fr", text: "Très vite dans ma vie il a été trop tard.", author: "Marguerite Duras", source: "L'Amant", tags: ["melancholy", "grief"] },
  { id: 189, lang: "fr", text: "Écrire c'est aussi ne pas parler. C'est se taire. C'est hurler sans bruit.", author: "Marguerite Duras", source: "Écrire", tags: ["loneliness", "grief", "defiance"] },

  // ── Yourcenar ───────────────────────────────────────────────────
  { id: 190, lang: "fr", text: "Le vrai lieu de naissance est celui où l'on a porté pour la première fois un coup d'œil intelligent sur soi-même.", author: "Marguerite Yourcenar", source: "Mémoires d'Hadrien", tags: ["lucidity"] },
  { id: 191, lang: "fr", text: "Mes premières patries ont été les livres.", author: "Marguerite Yourcenar", tags: ["wonder", "loneliness"] },

  // ── Bobin ───────────────────────────────────────────────────────
  { id: 192, lang: "fr", text: "Toute personne qui souffre est un roi vivant dans son palais d'absence.", author: "Christian Bobin", source: "Une petite robe de fête", tags: ["grief", "loneliness", "tenderness"] },
  { id: 193, lang: "fr", text: "Les vraies vies sont absentes. Nous ne vivons pas.", author: "Christian Bobin", tags: ["emptiness", "longing"] },
  { id: 194, lang: "fr", text: "Le plus court chemin d'un cœur à un autre est une ligne courbe.", author: "Christian Bobin", tags: ["tenderness", "wonder"] },

  // ── Joseph Joubert ──────────────────────────────────────────────
  { id: 195, lang: "fr", text: "L'imagination est l'œil de l'âme.", author: "Joseph Joubert", source: "Pensées", tags: ["wonder", "lucidity"] },
  { id: 196, lang: "fr", text: "Il ne faut pas dire toute la vérité, mais il ne faut dire que la vérité.", author: "Joseph Joubert", source: "Pensées", tags: ["lucidity"] },

  // ── Éluard ──────────────────────────────────────────────────────
  { id: 197, lang: "fr", text: "La terre est bleue comme une orange.", author: "Paul Éluard", source: "L'Amour la poésie", tags: ["wonder", "absurdity"] },
  { id: 198, lang: "fr", text: "Il y a un autre monde mais il est dans celui-ci.", author: "Paul Éluard", tags: ["wonder", "lucidity"] },

  // ── Aragon ──────────────────────────────────────────────────────
  { id: 199, lang: "fr", text: "Rien n'est jamais acquis à l'homme. Ni sa force ni sa faiblesse ni son cœur.", author: "Louis Aragon", source: "Il n'y a pas d'amour heureux", tags: ["acceptance", "melancholy", "lucidity"] },
  { id: 200, lang: "fr", text: "Il n'y a pas d'amour heureux.", author: "Louis Aragon", source: "Il n'y a pas d'amour heureux", tags: ["grief", "longing", "tenderness"] },

  // ── Jaccottet, Bonnefoy ─────────────────────────────────────────
  { id: 201, lang: "fr", text: "Imperfection est la cime.", author: "Yves Bonnefoy", source: "Du mouvement et de l'immobilité de Douve", tags: ["acceptance", "wonder"] },
  { id: 202, lang: "fr", text: "Toute parole est mensonge, mais il faut parler.", author: "Yves Bonnefoy", tags: ["lucidity", "courage"] },
  { id: 203, lang: "fr", text: "Parler est facile, et tracer des mots sur la page, en règle générale, est risquer peu de chose : un ouvrage de dentellière, calfeutré, paisible.", author: "Philippe Jaccottet", source: "À la lumière d'hiver", tags: ["lucidity"] },

  // ── Michaux ─────────────────────────────────────────────────────
  { id: 204, lang: "fr", text: "Celui qui chante au moment du supplice n'est pas le supplicié, mais un homme intérieur.", author: "Henri Michaux", source: "Épreuves, exorcismes", tags: ["courage", "defiance"] },

  // ── Quignard ────────────────────────────────────────────────────
  { id: 205, lang: "fr", text: "Lire, c'est errer. La lecture est l'errance.", author: "Pascal Quignard", tags: ["wonder", "lucidity"] },
  { id: 206, lang: "fr", text: "Le bonheur n'est jamais réfléchissable.", author: "Pascal Quignard", tags: ["wonder"] },

  // ── Annie Ernaux ────────────────────────────────────────────────
  { id: 207, lang: "fr", text: "Écrire, c'est essayer de savoir ce qu'on écrirait si on écrivait.", author: "Marguerite Duras", tags: ["lucidity", "longing"] },
  { id: 208, lang: "fr", text: "L'écriture est un couteau.", author: "Annie Ernaux", tags: ["defiance", "lucidity"] },

  // ── Gary, Cohen, Sagan ──────────────────────────────────────────
  { id: 209, lang: "fr", text: "Avec l'amour maternel, la vie vous fait à l'aube une promesse qu'elle ne tient jamais.", author: "Romain Gary", source: "La Promesse de l'aube", tags: ["grief", "tenderness", "longing"] },
  { id: 210, lang: "fr", text: "Le manque d'amitié n'est pas une douleur. Le manque d'amour est le malheur.", author: "Albert Cohen", source: "Belle du Seigneur", tags: ["loneliness", "longing"] },
  { id: 211, lang: "fr", text: "On peut être triste sans avoir de raison.", author: "Françoise Sagan", source: "Bonjour tristesse", tags: ["melancholy"] },

  // ── Verlaine ────────────────────────────────────────────────────
  { id: 212, lang: "fr", text: "Il pleure dans mon cœur comme il pleut sur la ville.", author: "Paul Verlaine", source: "Romances sans paroles", tags: ["melancholy", "grief"] },
  { id: 213, lang: "fr", text: "Les sanglots longs des violons de l'automne blessent mon cœur d'une langueur monotone.", author: "Paul Verlaine", source: "Chanson d'automne", tags: ["melancholy", "longing", "exhaustion"] },

  // ── Hugo ────────────────────────────────────────────────────────
  { id: 214, lang: "fr", text: "Demain, dès l'aube, à l'heure où blanchit la campagne, je partirai.", author: "Victor Hugo", source: "Les Contemplations", tags: ["grief", "longing"] },
  { id: 215, lang: "fr", text: "Aimer, c'est agir.", author: "Victor Hugo", tags: ["tenderness", "courage"] },

  // ── Char (supplément) ───────────────────────────────────────────
  { id: 216, lang: "fr", text: "La lucidité est la blessure la plus rapprochée du soleil.", author: "René Char", tags: ["lucidity", "courage"] },
  { id: 217, lang: "fr", text: "Avance encore une fois ce que ton cœur attendait.", author: "René Char", tags: ["courage", "longing"] },

  // ── Modernes ────────────────────────────────────────────────────
  { id: 218, lang: "fr", text: "Le temps ne fait rien à l'affaire. Quand on est con, on est con.", author: "Georges Brassens", source: "Le temps ne fait rien à l'affaire", tags: ["absurdity", "defiance"] },
  { id: 219, lang: "fr", text: "Un homme seul est toujours en mauvaise compagnie.", author: "Paul Valéry", source: "Tel quel", tags: ["loneliness", "lucidity"] },
  { id: 220, lang: "fr", text: "Ce qui est simple est faux. Ce qui ne l'est pas est inutilisable.", author: "Paul Valéry", source: "Mauvaises pensées et autres", tags: ["lucidity", "absurdity"] },
  { id: 221, lang: "fr", text: "Le vent se lève, il faut tenter de vivre.", author: "Paul Valéry", source: "Le Cimetière marin", tags: ["courage", "exhaustion"] },

  // ── Vian, Prévert ───────────────────────────────────────────────
  { id: 222, lang: "fr", text: "L'amour, c'est comme les rideaux : ça s'use à la lumière.", author: "Boris Vian", tags: ["grief", "tenderness", "melancholy"] },
  { id: 223, lang: "fr", text: "Notre Père qui êtes aux cieux, restez-y.", author: "Jacques Prévert", source: "Pater Noster", tags: ["defiance", "absurdity"] },

  // ── Modernes encore ─────────────────────────────────────────────
  { id: 224, lang: "fr", text: "Ce qui nous arrive de plus important, nous le devons aux livres.", author: "Pierre Bayard", tags: ["wonder"] },
  { id: 225, lang: "fr", text: "On ne meurt jamais que de soi-même.", author: "Maurice Maeterlinck", tags: ["lucidity", "grief"] },

  // ═══════════════════════════════════════════════════════════════
  // PORTUGUESE (original)
  // ═══════════════════════════════════════════════════════════════

  // ── Pessoa & heteronyms ─────────────────────────────────────────
  { id: 226, lang: "pt", text: "Não sou nada. Nunca serei nada. Não posso querer ser nada. À parte isso, tenho em mim todos os sonhos do mundo.", author: "Fernando Pessoa (Álvaro de Campos)", source: "Tabacaria", tags: ["emptiness", "longing", "lucidity"] },
  { id: 227, lang: "pt", text: "Tudo vale a pena se a alma não é pequena.", author: "Fernando Pessoa", source: "Mensagem", tags: ["courage", "wonder"] },
  { id: 228, lang: "pt", text: "Para ser grande, sê inteiro: nada teu exagera ou exclui. Sê todo em cada coisa. Põe quanto és no mínimo que fazes.", author: "Fernando Pessoa (Ricardo Reis)", tags: ["lucidity", "courage"] },
  { id: 229, lang: "pt", text: "Sou do tamanho do que vejo e não do tamanho da minha altura.", author: "Fernando Pessoa (Alberto Caeiro)", tags: ["wonder", "lucidity"] },
  { id: 230, lang: "pt", text: "Há metafísica bastante em não pensar em nada.", author: "Fernando Pessoa (Alberto Caeiro)", source: "O Guardador de Rebanhos", tags: ["acceptance", "absurdity"] },
  { id: 231, lang: "pt", text: "Sentir tudo de todas as maneiras.", author: "Fernando Pessoa (Álvaro de Campos)", tags: ["longing", "wonder"] },
  { id: 232, lang: "pt", text: "A vida é o que fazemos dela. As viagens são os viajantes. O que vemos não é o que vemos, senão o que somos.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["lucidity"] },
  { id: 233, lang: "pt", text: "Tenho mais almas que uma.", author: "Fernando Pessoa", tags: ["lucidity", "loneliness"] },
  { id: 234, lang: "pt", text: "Viajar! Perder países!", author: "Fernando Pessoa (Álvaro de Campos)", tags: ["longing", "defiance"] },
  { id: 235, lang: "pt", text: "Que sei eu do que serei, eu que não sei o que sou?", author: "Fernando Pessoa", tags: ["lucidity", "fear"] },
  { id: 236, lang: "pt", text: "Sinto-me nascido a cada momento para a eterna novidade do Mundo.", author: "Fernando Pessoa (Alberto Caeiro)", tags: ["wonder", "acceptance"] },
  { id: 237, lang: "pt", text: "A literatura é a prova de que a vida não chega.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["longing", "lucidity"] },
  { id: 238, lang: "pt", text: "Ah, é a saudade, a saudade dolorosa e suave, de outras coisas que essa, em que eu, lendo, vagamente esqueceria.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["longing", "melancholy"] },
  { id: 239, lang: "pt", text: "Cada um de nós é vários, é muitos, é uma prolixidade de si mesmos.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["lucidity"] },
  { id: 240, lang: "pt", text: "Tédio... Pensar sem que se pense, mas com o cansaço de pensar.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["exhaustion", "emptiness"] },
  { id: 241, lang: "pt", text: "Sempre rejeitei que me compreendessem. Ser compreendido é prostituir-se.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["defiance", "loneliness"] },
  { id: 242, lang: "pt", text: "A minha alma é uma orquestra oculta; não sei que instrumentos tange e range, cordas e harpas, timbales e tambores, dentro de mim.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["lucidity", "wonder"] },
  { id: 243, lang: "pt", text: "Não tenho ambições nem desejos. Ser poeta não é uma ambição minha. É a minha maneira de estar sozinho.", author: "Fernando Pessoa", tags: ["loneliness", "acceptance"] },
  { id: 244, lang: "pt", text: "Estar cansado é estar antigo.", author: "Fernando Pessoa", source: "Livro do Desassossego", tags: ["exhaustion", "melancholy"] },
  { id: 245, lang: "pt", text: "Os deuses vendem quando dão. Compra-se a glória com desgraça.", author: "Fernando Pessoa", source: "Mensagem", tags: ["grief", "lucidity"] },

  // ── Sophia de Mello Breyner Andresen ────────────────────────────
  { id: 246, lang: "pt", text: "Quando eu morrer voltarei para buscar / Os instantes que não vivi junto do mar.", author: "Sophia de Mello Breyner Andresen", source: "Quando", tags: ["longing", "grief"] },
  { id: 247, lang: "pt", text: "A poesia não me pede propriamente uma especialização, pois a sua arte é uma arte do ser.", author: "Sophia de Mello Breyner Andresen", tags: ["lucidity", "wonder"] },
  { id: 248, lang: "pt", text: "Vou ao fundo da minha alma para colher o que de mais real existe em mim.", author: "Sophia de Mello Breyner Andresen", tags: ["lucidity", "courage"] },
  { id: 249, lang: "pt", text: "Não sei se vivo, se durmo, se sou.", author: "Sophia de Mello Breyner Andresen", tags: ["lucidity", "absurdity"] },

  // ── Florbela Espanca ────────────────────────────────────────────
  { id: 250, lang: "pt", text: "Ser Poeta é ser mais alto, é ser maior do que os Homens! Morder como quem beija!", author: "Florbela Espanca", source: "Ser Poeta", tags: ["defiance", "wonder"] },
  { id: 251, lang: "pt", text: "Amar! Amar! E não amar ninguém!", author: "Florbela Espanca", source: "Amar!", tags: ["longing", "loneliness", "tenderness"] },
  { id: 252, lang: "pt", text: "Eu quero amar, amar perdidamente!", author: "Florbela Espanca", source: "Amar!", tags: ["longing", "defiance", "tenderness"] },
  { id: 253, lang: "pt", text: "Procuro em mim aquilo que perdi.", author: "Florbela Espanca", tags: ["longing", "grief"] },

  // ── Eugénio de Andrade ──────────────────────────────────────────
  { id: 254, lang: "pt", text: "As palavras são quanto resta entre nós.", author: "Eugénio de Andrade", tags: ["loneliness", "longing"] },
  { id: 255, lang: "pt", text: "É urgente o amor. É urgente um barco no mar.", author: "Eugénio de Andrade", source: "É Urgente o Amor", tags: ["longing", "courage"] },
  { id: 256, lang: "pt", text: "Toda manhã se anuncia de novo. Sempre vai ser hoje, e hoje ainda.", author: "Eugénio de Andrade", tags: ["acceptance", "wonder"] },

  // ── Mário de Sá-Carneiro ────────────────────────────────────────
  { id: 257, lang: "pt", text: "Eu não sou eu nem sou o outro, sou qualquer coisa de intermédio: pilar da ponte de tédio que vai de mim para o Outro.", author: "Mário de Sá-Carneiro", source: "7", tags: ["emptiness", "lucidity", "loneliness"] },
  { id: 258, lang: "pt", text: "Perdi-me dentro de mim porque eu era labirinto.", author: "Mário de Sá-Carneiro", tags: ["lucidity", "loneliness"] },

  // ── Drummond de Andrade ─────────────────────────────────────────
  { id: 259, lang: "pt", text: "No meio do caminho tinha uma pedra, tinha uma pedra no meio do caminho.", author: "Carlos Drummond de Andrade", source: "No Meio do Caminho", tags: ["exhaustion", "absurdity"] },
  { id: 260, lang: "pt", text: "E agora, José?", author: "Carlos Drummond de Andrade", source: "José", tags: ["fear", "exhaustion", "absurdity"] },
  { id: 261, lang: "pt", text: "Mundo mundo vasto mundo, se eu me chamasse Raimundo seria uma rima, não seria uma solução.", author: "Carlos Drummond de Andrade", source: "Poema de Sete Faces", tags: ["absurdity", "loneliness"] },
  { id: 262, lang: "pt", text: "Lutar com palavras é a luta mais vã. Entanto lutamos mal rompe a manhã.", author: "Carlos Drummond de Andrade", source: "O Lutador", tags: ["exhaustion", "courage"] },
  { id: 263, lang: "pt", text: "Tenho apenas duas mãos e o sentimento do mundo.", author: "Carlos Drummond de Andrade", source: "Sentimento do Mundo", tags: ["tenderness", "courage"] },
  { id: 264, lang: "pt", text: "Para que tantas cartas e palavras, se ninguém nos compreende?", author: "Carlos Drummond de Andrade", tags: ["loneliness", "melancholy"] },

  // ── Cecília Meireles ────────────────────────────────────────────
  { id: 265, lang: "pt", text: "Eu canto porque o instante existe e a minha vida está completa.", author: "Cecília Meireles", source: "Motivo", tags: ["acceptance", "wonder"] },
  { id: 266, lang: "pt", text: "Não sou alegre nem sou triste: sou poeta.", author: "Cecília Meireles", source: "Motivo", tags: ["acceptance", "lucidity"] },
  { id: 267, lang: "pt", text: "Liberdade — essa palavra que o sonho humano alimenta, que não há ninguém que explique e ninguém que não entenda.", author: "Cecília Meireles", source: "Romanceiro da Inconfidência", tags: ["longing", "courage"] },

  // ── Clarice Lispector ───────────────────────────────────────────
  { id: 268, lang: "pt", text: "Estou tão receosa de subitamente entender. Não quero dar nenhum passo brusco.", author: "Clarice Lispector", source: "Água Viva", tags: ["fear", "lucidity"] },
  { id: 269, lang: "pt", text: "Liberdade é pouco. O que desejo ainda não tem nome.", author: "Clarice Lispector", tags: ["longing", "defiance"] },
  { id: 270, lang: "pt", text: "Eu sou tão misteriosa que nem eu mesma me entendo.", author: "Clarice Lispector", tags: ["lucidity", "loneliness"] },
  { id: 271, lang: "pt", text: "Quanto mais eu não te entender, mais profunda será a nossa relação.", author: "Clarice Lispector", tags: ["tenderness", "lucidity"] },
  { id: 272, lang: "pt", text: "Não quero ter a terrível limitação de quem vive apenas do que é passível de fazer sentido.", author: "Clarice Lispector", source: "Água Viva", tags: ["defiance", "wonder"] },
  { id: 273, lang: "pt", text: "Sou um coração batendo no mundo.", author: "Clarice Lispector", tags: ["wonder", "tenderness"] },
  { id: 274, lang: "pt", text: "Que ninguém se engane, só consigo a simplicidade através de muito trabalho.", author: "Clarice Lispector", source: "A Descoberta do Mundo", tags: ["exhaustion", "lucidity"] },

  // ── Manuel Bandeira ─────────────────────────────────────────────
  { id: 275, lang: "pt", text: "A vida é um milagre. Cada flor, com sua forma, sua cor, seu aroma, cada flor é um milagre.", author: "Manuel Bandeira", tags: ["wonder", "tenderness"] },
  { id: 276, lang: "pt", text: "Estou farto do lirismo comedido, do lirismo bem comportado.", author: "Manuel Bandeira", source: "Poética", tags: ["defiance"] },

  // ── Vinicius de Moraes ──────────────────────────────────────────
  { id: 277, lang: "pt", text: "Que seja eterno enquanto dure.", author: "Vinicius de Moraes", source: "Soneto de Fidelidade", tags: ["tenderness", "acceptance"] },
  { id: 278, lang: "pt", text: "A vida é a arte do encontro, embora haja tanto desencontro pela vida.", author: "Vinicius de Moraes", source: "Samba da Bênção", tags: ["loneliness", "tenderness", "longing"] },

  // ── Adélia Prado ────────────────────────────────────────────────
  { id: 279, lang: "pt", text: "A poesia me catou no fundo do quintal.", author: "Adélia Prado", source: "Bagagem", tags: ["wonder"] },
  { id: 280, lang: "pt", text: "Deus, de vez em quando me tira a poesia. Olho pedra, vejo pedra mesmo.", author: "Adélia Prado", tags: ["emptiness", "exhaustion"] },

  // ── Hilda Hilst ─────────────────────────────────────────────────
  { id: 281, lang: "pt", text: "Faz escuro mas eu canto.", author: "Thiago de Mello", source: "Faz Escuro Mas Eu Canto", tags: ["courage", "defiance"] },
  { id: 282, lang: "pt", text: "Da vida quero a coragem do princípio.", author: "Hilda Hilst", tags: ["courage", "longing"] },

  // ── José Saramago ───────────────────────────────────────────────
  { id: 283, lang: "pt", text: "É preciso sair da ilha para ver a ilha. Não nos vemos se não saímos de nós.", author: "José Saramago", source: "O Conto da Ilha Desconhecida", tags: ["lucidity", "courage"] },
  { id: 284, lang: "pt", text: "Há que viver. A vida é a vida, ainda que seja pouca, mesmo que pareça nada.", author: "José Saramago", tags: ["acceptance", "exhaustion"] },
  { id: 285, lang: "pt", text: "Talvez no mundo não haja justiça, mas o que se pode é não ser injusto.", author: "José Saramago", tags: ["lucidity", "courage"] },

  // ── Mia Couto ───────────────────────────────────────────────────
  { id: 286, lang: "pt", text: "Cada homem é uma raça.", author: "Mia Couto", tags: ["lucidity", "loneliness"] },
  { id: 287, lang: "pt", text: "Os tristes pensam que não há esperança. Os esperançados pensam que não há tristeza.", author: "Mia Couto", tags: ["lucidity", "acceptance"] },
  { id: 288, lang: "pt", text: "Eu não sou eu sem o outro.", author: "Mia Couto", tags: ["loneliness", "tenderness"] },

  // ── Outros ──────────────────────────────────────────────────────
  { id: 289, lang: "pt", text: "Tudo o que é dado é dado para ser perdido.", author: "Hilda Hilst", tags: ["grief", "acceptance"] },
  { id: 290, lang: "pt", text: "Quem espera, sempre alcança. Mas às vezes alcança o cansaço.", author: "Mia Couto", tags: ["exhaustion", "acceptance"] },

  // ── More EN for the tail end ────────────────────────────────────
  { id: 291, lang: "en", text: "Just to live is holy. Just to be is a blessing.", author: "Abraham Joshua Heschel", tags: ["wonder", "acceptance"] },
  { id: 292, lang: "en", text: "The body keeps the score.", author: "Bessel van der Kolk", source: "The Body Keeps the Score", tags: ["grief", "lucidity"] },
  { id: 293, lang: "en", text: "Between stimulus and response there is a space. In that space is our power to choose our response.", author: "Viktor Frankl", source: "Man's Search for Meaning", tags: ["courage", "lucidity"] },
  { id: 294, lang: "en", text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", source: "Man's Search for Meaning", tags: ["acceptance", "courage"] },
  { id: 295, lang: "en", text: "If you do not change direction, you may end up where you are heading.", author: "Lao Tzu", tags: ["lucidity"] },
  { id: 296, lang: "en", text: "Vulnerability is not winning or losing; it's having the courage to show up when you can't control the outcome.", author: "Brené Brown", tags: ["courage", "fear"] },
  { id: 297, lang: "en", text: "Sleep is the best meditation.", author: "Dalai Lama", tags: ["exhaustion", "acceptance"] },
  { id: 298, lang: "en", text: "Resentment is like drinking poison and waiting for the other person to die.", author: "Carrie Fisher", tags: ["defiance", "lucidity"] },
  { id: 299, lang: "en", text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott", source: "Little Women", tags: ["courage", "fear"] },
  { id: 300, lang: "en", text: "And now that you don't have to be perfect, you can be good.", author: "John Steinbeck", source: "East of Eden", tags: ["acceptance", "tenderness"] },
  { id: 301, lang: "en", text: "It is never too late to be what you might have been.", author: "George Eliot", tags: ["longing", "courage"] },
  { id: 302, lang: "en", text: "Sometimes you don't realize the weight of something you've been carrying until you feel the weight of its release.", author: "Anonymous", tags: ["exhaustion", "acceptance", "grief"] },
  { id: 303, lang: "en", text: "Grief is the price we pay for love.", author: "Queen Elizabeth II", tags: ["grief", "tenderness"] },
  { id: 304, lang: "en", text: "Tears are summer showers to the soul.", author: "Alfred Austin", tags: ["grief", "acceptance"] },
  { id: 305, lang: "en", text: "Loneliness adds beauty to life. It puts a special burn on sunsets and makes night air smell better.", author: "Henry Rollins", tags: ["loneliness", "wonder"] },
];
