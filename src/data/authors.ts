// One-sentence biographical notes for each author in the corpus.
// English by design: this is meta-commentary, not part of the literary work,
// so it stays in a single language to keep the data small and consistent.
// Heteronyms (Fernando Pessoa's, mainly) resolve via getAuthorBio.

export const authors: Record<string, string> = {
  "Marcus Aurelius":
    "Roman emperor and Stoic philosopher (121–180); his private Greek notebook became Meditations, never meant for publication.",
  "Seneca":
    "Roman statesman and Stoic (c. 4 BC–65 AD); tutor and later forced suicide by Nero; his letters distill practical Stoicism.",
  "Rumi":
    "13th-century Persian poet and Sufi mystic (1207–1273); his Mathnawi is one of the most widely read mystical texts in the world.",
  "David Foster Wallace":
    "American novelist and essayist (1962–2008); wrote Infinite Jest and the commencement speech This Is Water; took his own life.",
  "Annie Dillard":
    "American writer (b. 1945) of essays and natural philosophy; Pilgrim at Tinker Creek won the Pulitzer.",
  "Anne Carson":
    "Canadian poet and classicist (b. 1950) translating Greek tragedy and writing genre-defying poetry.",
  "Etty Hillesum":
    "Dutch Jewish writer (1914–1943) who kept luminous diaries during Nazi occupation before her death at Auschwitz.",
  "Rainer Maria Rilke":
    "Austrian poet (1875–1926); his Letters to a Young Poet and Duino Elegies shape how generations have thought about solitude and inwardness.",
  "Søren Kierkegaard":
    "Danish philosopher (1813–1855); father of existentialism, wrote under multiple pseudonyms on anxiety, despair, and faith.",
  "Mary Oliver":
    "American poet (1935–2019); Pulitzer winner whose plainspoken poems on nature and attention found a massive readership.",
  "James Baldwin":
    "American novelist and essayist (1924–1987); wrote unflinchingly on race, sexuality, and the moral life from Harlem and Paris.",
  "Joan Didion":
    "American writer (1934–2021); essayist of California, grief, and the failure of narrative to hold experience together.",
  "Jorge Luis Borges":
    "Argentine writer (1899–1986); short fictions and essays that built infinite libraries, mirrors, and labyrinths out of paragraphs.",
  "Wisława Szymborska":
    "Polish poet (1923–2012) and Nobel laureate; wrote with light irony on the strangeness of existing at all.",
  "Franz Kafka":
    "Prague-born writer in German (1883–1924); his unfinished novels and aphorisms staked out a modernity of bureaucratic dread.",
  "Ludwig Wittgenstein":
    "Austrian-British philosopher (1889–1951); the Tractatus and the later Philosophical Investigations both upended philosophy of language.",
  "Virginia Woolf":
    "English novelist (1882–1941); central to literary modernism; wrote To the Lighthouse, The Waves, A Room of One's Own.",
  "Friedrich Nietzsche":
    "German philosopher (1844–1900); attacked received morality with aphoristic intensity until madness silenced him at 44.",
  "W. H. Auden":
    "Anglo-American poet (1907–1973); ranged from political verse to elegies; one of the great formalists of the 20th century.",
  "Samuel Beckett":
    "Irish playwright and novelist (1906–1989) writing in French and English; the laureate of going on when there is nothing to say.",
  "Robert Walser":
    "Swiss German-language writer (1878–1956); wrote The Walk and miniatures of attentive humility before spending decades in asylums.",
  "Henry David Thoreau":
    "American transcendentalist (1817–1862); Walden is the founding text of American self-sufficiency and civil disobedience.",
  "Audre Lorde":
    "American poet and activist (1934–1992); self-described \"Black, lesbian, mother, warrior, poet\"; wrote on care as politics.",
  "Toni Morrison":
    "American novelist (1931–2019); Nobel laureate; Beloved and Song of Solomon reshaped how American literature reckons with race.",
  "Ocean Vuong":
    "Vietnamese-American poet and novelist (b. 1988); On Earth We're Briefly Gorgeous is part letter, part lyric memoir.",
  "Hannah Arendt":
    "German-born American political theorist (1906–1975); wrote on totalitarianism, the human condition, and the banality of evil.",
  "Marina Tsvetaeva":
    "Russian poet (1892–1941); exile, poverty, and Stalinist repression shaped a body of work as intense as any of her century.",
  "Adrienne Rich":
    "American poet and essayist (1929–2012); on language, lesbian identity, and the refusal of bland consensus.",
  "Sylvia Plath":
    "American poet and novelist (1932–1963); The Bell Jar and the late Ariel poems remain touchstones of confessional verse.",
  "T. S. Eliot":
    "American-born British poet (1888–1965); The Waste Land and Four Quartets defined high modernism in English.",
  "Seamus Heaney":
    "Irish poet (1939–2013); Nobel laureate; wrote of bog, family, and the politics of Northern Ireland with unhurried clarity.",
  "Wilfred Owen":
    "English war poet (1893–1918); killed a week before the Armistice; his trench poems redefined how war is written.",
  "Rebecca Solnit":
    "American essayist (b. 1961); on hope, walking, place, and the long arc of political change.",
  "Susan Sontag":
    "American critic and novelist (1933–2004); essays on photography, illness, and the moral weight of attention.",
  "Lao Tzu":
    "Legendary Chinese sage (6th century BC?); credited with the Tao Te Ching, the founding text of Taoism.",
  "John O'Donohue":
    "Irish poet, priest, and philosopher (1956–2008); wrote of Celtic spirituality and the inner landscape of friendship.",
  "David Whyte":
    "English/Irish poet (b. 1955); brings poetry into corporate and personal life; wrote Consolations.",
  "W. B. Yeats":
    "Irish poet (1865–1939); Nobel laureate; central figure of the Irish Literary Revival.",
  "Dylan Thomas":
    "Welsh poet (1914–1953); known for ecstatic, sound-driven verse and his radio play Under Milk Wood.",
  "Carl Jung":
    "Swiss psychiatrist (1875–1961); founded analytical psychology; gave us terms like shadow, archetype, and introvert/extrovert.",
  "Paulo Coelho":
    "Brazilian novelist (b. 1947); The Alchemist became one of the most translated books in living memory.",
  "Maya Angelou":
    "American writer and civil rights worker (1928–2014); I Know Why the Caged Bird Sings opened a generation of memoir.",
  "Oscar Wilde":
    "Irish playwright and wit (1854–1900); imprisoned for homosexuality; left aphorisms still in circulation.",
  "Leonard Cohen":
    "Canadian songwriter and poet (1934–2016); songs and poems that braided sex, religion, and political weariness.",
  "Winston Churchill":
    "British prime minister (1874–1965); led the UK through the Second World War; left a vast and very quotable body of speeches.",
  "Michelangelo":
    "Italian Renaissance sculptor, painter, and poet (1475–1564); the David, the Sistine Ceiling, and a thick correspondence.",
  "Jim Elliot":
    "American Christian missionary (1927–1956); killed in Ecuador; his journals were published posthumously.",
  "Olga Tokarczuk":
    "Polish novelist (b. 1962); Nobel laureate; wrote Flights, The Books of Jacob, and on \"tenderness\" as a literary stance.",
  "Isak Dinesen":
    "Pen name of Karen Blixen, Danish author (1885–1962); wrote Out of Africa and tales of the strangeness of fate.",
  "Gospel of Thomas":
    "A non-canonical early Christian text rediscovered at Nag Hammadi in 1945; 114 sayings attributed to Jesus.",
  "Thomas Fuller":
    "English churchman and aphorist (1608–1661); compiler of historical and devotional miscellanies.",
  "Margaret Mitchell":
    "American novelist (1900–1949); Gone with the Wind, her only novel, won the Pulitzer.",
  "Stewart Brand":
    "American writer (b. 1938); founded the Whole Earth Catalog; the line was the closing message of its final issue.",
  "William Ernest Henley":
    "English poet (1849–1903); wrote Invictus from a hospital bed during long treatment for tuberculosis.",
  "Abraham Joshua Heschel":
    "Polish-born American rabbi and philosopher (1907–1972); marched at Selma and wrote on awe and Sabbath.",
  "Bessel van der Kolk":
    "Dutch-American psychiatrist (b. 1943); pioneered modern trauma research; wrote The Body Keeps the Score.",
  "Viktor Frankl":
    "Austrian psychiatrist and Holocaust survivor (1905–1997); founded logotherapy; wrote Man's Search for Meaning.",
  "Brené Brown":
    "American research professor (b. 1965); studies shame, courage, and vulnerability.",
  "Carrie Fisher":
    "American actress and writer (1956–2016); wrote candidly about addiction and bipolar disorder; played Leia.",
  "Louisa May Alcott":
    "American novelist (1832–1888); Little Women drew on her own family of four sisters in 19th-century New England.",
  "John Steinbeck":
    "American novelist (1902–1968); Nobel laureate; wrote The Grapes of Wrath, East of Eden, Of Mice and Men.",
  "George Eliot":
    "Pen name of Mary Ann Evans, English novelist (1819–1880); Middlemarch is often called the greatest novel in English.",
  "Anonymous": "",
  "Queen Elizabeth II":
    "Queen of the United Kingdom (1926–2022); the line was a message sent after the September 11 attacks.",
  "Alfred Austin":
    "English poet (1835–1913); Poet Laureate of the United Kingdom from 1896 until his death.",
  "Henry Rollins":
    "American musician and spoken-word artist (b. 1961); fronted Black Flag and Rollins Band.",

  // ── French ──────────────────────────────────────────────────────
  "Emil Cioran":
    "Romanian-born philosopher (1911–1995) who wrote his major works in French; aphorist of insomnia and dark lucidity.",
  "Albert Camus":
    "French-Algerian writer (1913–1960); Nobel laureate; The Stranger, The Plague, The Myth of Sisyphus.",
  "Simone Weil":
    "French philosopher and mystic (1909–1943); factory worker, activist, religious thinker; died at 34 from refusing to eat more than rationed French civilians.",
  "Blaise Pascal":
    "French mathematician, physicist, and theologian (1623–1662); the Pensées are unfinished notes for a defense of Christianity.",
  "François de La Rochefoucauld":
    "French moralist and aristocrat (1613–1680); his Maximes are 17th-century epigrams on human self-deception.",
  "Charles Baudelaire":
    "French poet (1821–1867); Les Fleurs du mal and Le Spleen de Paris invented modern poetry in French.",
  "Arthur Rimbaud":
    "French poet (1854–1891); wrote everything that matters by 21, then quit poetry and went to Africa.",
  "René Char":
    "French poet (1907–1988); résistance leader; wrote Feuillets d'Hypnos in code during the occupation.",
  "Guillaume Apollinaire":
    "French poet of Polish origin (1880–1918); coined the word \"surrealism\"; died of Spanish flu after recovering from a war wound.",
  "Marcel Proust":
    "French novelist (1871–1922); In Search of Lost Time runs to seven volumes; he wrote much of it from a cork-lined bedroom.",
  "Antoine de Saint-Exupéry":
    "French aviator and writer (1900–1944); wrote The Little Prince and disappeared on a reconnaissance flight over the Mediterranean.",
  "Michel de Montaigne":
    "French Renaissance philosopher (1533–1592); invented the personal essay; his Essais are 107 attempts at the question \"what do I know?\"",
  "Marguerite Duras":
    "French writer and filmmaker (1914–1996); L'Amant is a half-fictional memoir of her teenage years in colonial Indochina.",
  "Marguerite Yourcenar":
    "French novelist (1903–1987); first woman elected to the Académie française; Mémoires d'Hadrien is her best-known work.",
  "Christian Bobin":
    "French writer (1951–2022); short, luminous prose on attention, grief, and the small lives of those who pass unnoticed.",
  "Joseph Joubert":
    "French moralist (1754–1824); never published a book; his notebooks were edited by Chateaubriand after his death.",
  "Paul Éluard":
    "French surrealist poet (1895–1952); résistance figure; the line \"La terre est bleue comme une orange\" is one of surrealism's calling cards.",
  "Louis Aragon":
    "French poet and novelist (1897–1982); co-founder of surrealism; later a committed communist.",
  "Yves Bonnefoy":
    "French poet (1923–2016); also a translator of Shakespeare and Yeats into French.",
  "Philippe Jaccottet":
    "Swiss French-language poet and translator (1925–2021); translated Hölderlin, Musil, and Rilke into French.",
  "Henri Michaux":
    "Belgian-born French writer (1899–1984); also a painter; experimented with mescaline to map interior space.",
  "Pascal Quignard":
    "French novelist and essayist (b. 1948); resigned from public life to write his Petits traités and Tous les matins du monde.",
  "Annie Ernaux":
    "French writer (b. 1940); Nobel laureate; wrote autobiography as social history with surgical detachment.",
  "Romain Gary":
    "French novelist (1914–1980); only writer to win the Goncourt twice (under his own name and as Émile Ajar); shot himself at 66.",
  "Albert Cohen":
    "Swiss novelist of Greek origin writing in French (1895–1981); Belle du Seigneur is a 1,100-page demolition of romantic love.",
  "Françoise Sagan":
    "French novelist (1935–2004); published Bonjour tristesse at 18; the title became the chic name for postwar melancholy.",
  "Paul Verlaine":
    "French poet (1844–1896); central to symbolism; his love and rupture with Rimbaud ended with him shooting Rimbaud and going to prison.",
  "Victor Hugo":
    "French novelist, poet, and politician (1802–1885); Les Misérables, Notre-Dame de Paris; exiled for opposing Napoleon III.",
  "Georges Brassens":
    "French singer-songwriter (1921–1981); a literary anarchist with a guitar; set Villon, Hugo, and his own verse to music.",
  "Paul Valéry":
    "French poet and essayist (1871–1945); kept private notebooks (Cahiers) every morning for fifty years.",
  "Boris Vian":
    "French novelist, jazz trumpeter, and provocateur (1920–1959); wrote L'Écume des jours; died at 39 watching a film adaptation of his own work.",
  "Jacques Prévert":
    "French poet and screenwriter (1900–1977); wrote Les Enfants du paradis; his Paroles became one of the best-selling poetry books in French.",
  "Pierre Bayard":
    "French literary theorist (b. 1954); his most famous book is titled How to Talk About Books You Haven't Read.",
  "Maurice Maeterlinck":
    "Belgian playwright (1862–1949); Nobel laureate; symbolist theater and essays on bees, termites, and silence.",

  // ── Portuguese & Lusophone ──────────────────────────────────────
  "Fernando Pessoa":
    "Portuguese poet (1888–1935); wrote under dozens of distinct \"heteronyms\" — fully imagined poets with their own biographies and styles.",
  "Sophia de Mello Breyner Andresen":
    "Portuguese poet (1919–2004); first woman to win the Camões Prize; Greek antiquity and the Atlantic Ocean are constant presences.",
  "Florbela Espanca":
    "Portuguese poet (1894–1930); intense, formally exact sonnets on solitude and desire; took her own life at 36.",
  "Eugénio de Andrade":
    "Portuguese poet (1923–2005); spare, sensory poems with deep Mediterranean roots.",
  "Mário de Sá-Carneiro":
    "Portuguese poet and novelist (1890–1916); close friend of Pessoa; killed himself in a Paris hotel at 25.",
  "Carlos Drummond de Andrade":
    "Brazilian poet (1902–1987); one of the most important figures in Brazilian modernism; ironic, conversational, devastating.",
  "Cecília Meireles":
    "Brazilian poet (1901–1964); also a journalist and educator; lyrical, formally classical voice in Brazilian modernism.",
  "Clarice Lispector":
    "Brazilian writer of Ukrainian Jewish origin (1920–1977); her novels and stories take metaphysics into the kitchen and the body.",
  "Manuel Bandeira":
    "Brazilian poet (1886–1968); modernist who wrote in plain language about illness, Recife, and the everyday.",
  "Vinicius de Moraes":
    "Brazilian poet, songwriter, and diplomat (1913–1980); co-wrote The Girl from Ipanema; a major voice of bossa nova.",
  "Adélia Prado":
    "Brazilian poet (b. 1935); came to public attention at 40; mixes Catholic mysticism and rural Minas Gerais detail.",
  "Thiago de Mello":
    "Brazilian poet (1926–2022); wrote of the Amazon and resistance to dictatorship.",
  "Hilda Hilst":
    "Brazilian writer (1930–2004); poetry, fiction, and theater; explicit, baroque, intensely metaphysical.",
  "José Saramago":
    "Portuguese novelist (1922–2010); Nobel laureate; Blindness, The Stone Raft, and a famous lifelong communism.",
  "Mia Couto":
    "Mozambican writer (b. 1955); writes in Portuguese inflected by Bantu rhythms; novels and stories of post-colonial Mozambique.",
  "Dalai Lama":
    "Spiritual leader of Tibetan Buddhism, Tenzin Gyatso (b. 1935); in exile since 1959; Nobel Peace Prize 1989.",

  // ── Added with the positive expansion ───────────────────────────
  "Walt Whitman":
    "American poet (1819–1892); Leaves of Grass invented a new democratic, ecstatic, all-inclusive voice for American verse.",
  "Gerard Manley Hopkins":
    "English Jesuit priest and poet (1844–1889); unpublished in his lifetime, he later changed English prosody with his sprung rhythm and ecstatic religious wonder.",
  "Wendell Berry":
    "American farmer, essayist, and poet (b. 1934); writes from rural Kentucky on land, labor, marriage, and the limits of progress.",
  "Lucille Clifton":
    "American poet (1936–2010); concise, plainspoken, often unpunctuated lines on Black womanhood, family, and survival.",
  "Maggie Smith":
    "American poet (b. 1977, no relation to the actress); Good Bones went viral in 2016 and shifted her career toward writing on resilience.",
  "Naomi Shihab Nye":
    "Palestinian-American poet (b. 1952); wrote 19 Varieties of Gazelle and a great deal of work bridging Arab-American experience and quiet attention.",
  "W. S. Merwin":
    "American poet (1927–2019); two-time Pulitzer winner; later in life he planted thousands of palm trees in Hawaii.",
  "e.e. cummings":
    "American poet (1894–1962); reshaped typography, punctuation, and syntax on the page; wrote love poems and anti-war satire with equal energy.",
  "Edna St. Vincent Millay":
    "American poet and playwright (1892–1950); Pulitzer winner; lived openly bohemian, formally sonnet-classical.",
  "Galway Kinnell":
    "American poet (1927–2014); civil rights activist; wrote a poetry of bodily presence, mortality, and recovered tenderness.",
  "Joy Harjo":
    "Mvskoke (Muscogee) poet and musician (b. 1951); first Native American U.S. Poet Laureate, serving three terms.",
  "Pablo Neruda":
    "Chilean poet and diplomat (1904–1973); Nobel laureate; communist senator under Allende; love poems and political odes in equal measure.",
  "Ross Gay":
    "American poet and essayist (b. 1974); The Book of Delights catalogs small joys deliberately, as a practice.",
  "Ursula K. Le Guin":
    "American writer (1929–2018); science fiction and fantasy that took both genres seriously as moral and political instruments.",
  "Marilynne Robinson":
    "American novelist and essayist (b. 1943); Pulitzer winner; Gilead is her best-known novel, a Calvinist meditation in epistolary form.",
  "Howard Thurman":
    "American theologian and civil rights mentor (1899–1981); taught Martin Luther King Jr. and others; wrote on inwardness and nonviolence.",
  "Ram Dass":
    "American spiritual teacher, born Richard Alpert (1931–2019); Harvard psychologist turned Hindu seeker; wrote Be Here Now.",
  "Frederick Buechner":
    "American Presbyterian minister and novelist (1926–2022); wrote luminous theological memoir between his sermons and fiction.",
  "Anne Lamott":
    "American novelist and essayist (b. 1954); writes on faith, addiction, motherhood, and writing itself in a deliberately unpolished voice.",

  "Pierre Reverdy":
    "French poet (1889–1960); central to early surrealism, friend of Picasso and Braque; later retreated to a Benedictine abbey at Solesmes.",
  "Pierre de Ronsard":
    "French Renaissance poet (1524–1585); leader of the Pléiade; his Sonnets pour Hélène were written for a court lady who refused him.",
  "Robert Desnos":
    "French surrealist poet (1900–1945); died of typhoid in a concentration camp just after liberation; one of the great voices of automatic writing.",
  "Jacques Brel":
    "Belgian singer-songwriter (1929–1978); wrote chansons of love, jealousy, mortality, and political fury, all in dense literary French.",
  "Édith Piaf":
    "French singer (1915–1963); voice of postwar Parisian streets; her recordings of songs by others (Vaucaire, Moustaki, Aznavour) became her own.",
  "Charles Trenet":
    "French singer-songwriter (1913–2001); wrote La Mer, Que reste-t-il de nos amours, and dozens of standards still in the French songbook.",
  "Hubert Reeves":
    "Canadian-French astrophysicist (1932–2023); popularized cosmology in French; made stardust a household word.",
  "Léopold Sédar Senghor":
    "Senegalese poet, philosopher, and the first president of Senegal (1906–2001); co-founder of the négritude literary movement.",
  "Jean Giono":
    "French novelist (1895–1970); writer of rural Provence and pacifist who was imprisoned twice for refusing war.",

  "Manoel de Barros":
    "Brazilian poet (1916–2014); raised in the Pantanal; wrote a lifetime of poems about the small, the broken, and what isn't useful.",
  "Cora Coralina":
    "Brazilian poet, born Ana Lins dos Guimarães Peixoto Bretas (1889–1985); published her first book at 76; wrote of life in inland Goiás.",
  "Mário Quintana":
    "Brazilian poet (1906–1994); from Rio Grande do Sul; quiet, ironic, formally simple poems on time and books.",
  "Caetano Veloso":
    "Brazilian singer-songwriter (b. 1942); co-founded Tropicália with Gilberto Gil; exiled by the dictatorship to London in 1969.",
  "Chico Buarque":
    "Brazilian singer, songwriter, and novelist (b. 1944); his songs from the 1970s carried coded criticism of the dictatorship past the censors.",
  "Gonzaguinha":
    "Brazilian singer-songwriter, born Luiz Gonzaga Jr. (1945–1991); son of Luiz Gonzaga; wrote some of MPB's most lyrically tender songs.",
  "João Guimarães Rosa":
    "Brazilian writer and diplomat (1908–1967); Grande Sertão: Veredas is his most famous work, written in an invented Portuguese that mixes sertanejo speech, neologisms, and archaisms.",

  // ── Second expansion: Dickinson, Frost, Glück, Cavafy, Howe and others ──
  "Emily Dickinson":
    "American poet (1830–1886); lived almost her entire life in one house in Amherst, Massachusetts; published only a dozen of her ~1,800 poems while alive.",
  "Robert Frost":
    "American poet (1874–1963); New England farmer and four-time Pulitzer winner; surface-plain verse that hides extensive metric and rhythmic engineering.",
  "Wallace Stevens":
    "American poet (1879–1955); spent his career as an insurance executive in Hartford; wrote some of the most metaphysically dense poetry in English.",
  "Louise Glück":
    "American poet (1943–2023); Nobel laureate; austere, mythologically literate work on family, loss, and survival.",
  "Czesław Miłosz":
    "Polish poet, essayist, and diplomat (1911–2004); Nobel laureate; defected from communist Poland in 1951 and wrote The Captive Mind.",
  "Adam Zagajewski":
    "Polish poet and essayist (1945–2021); Try to Praise the Mutilated World, published in The New Yorker the week after September 11, became one of the most circulated poems of the century.",
  "Constantine Cavafy":
    "Greek poet from Alexandria (1863–1933); worked as a clerk at the Egyptian Ministry of Public Works; published almost nothing in his lifetime.",
  "Anna Akhmatova":
    "Russian poet (1889–1966); her first husband was shot by the Bolsheviks, her son spent years in the gulag; she continued writing through it all.",
  "Sharon Olds":
    "American poet (b. 1942); Pulitzer winner; writes unflinchingly about the body, family, and intimate violence.",
  "Marie Howe":
    "American poet (b. 1950); What the Living Do was written after her brother's death from AIDS; New York State Poet from 2012–2014.",
  "Patti Smith":
    "American musician, poet, and memoirist (b. 1946); Just Kids won the National Book Award for nonfiction.",
  "bell hooks":
    "American writer and cultural critic, born Gloria Jean Watkins (1952–2021); chose to use lowercase letters in her pen name to keep attention on her ideas, not her person.",
  "Stéphane Mallarmé":
    "French symbolist poet (1842–1898); spent his life as a high-school English teacher; his Tuesday salons shaped a generation of French letters.",
  "Alphonse de Lamartine":
    "French romantic poet, novelist, and politician (1790–1869); his Méditations poétiques (1820) is often considered the start of French Romanticism.",

  "Ferreira Gullar":
    "Brazilian poet (1930–2016); founded the Neo-Concrete movement, then broke with it; spent years in political exile under the dictatorship.",
  "Paulo Leminski":
    "Brazilian poet (1944–1989); concrete poet, judoka, translator; his Toda Poesia became one of Brazil's best-selling poetry books in the decades after his death.",
  "João Cabral de Melo Neto":
    "Brazilian poet and diplomat (1920–1999); famously precise and anti-lyrical; Morte e Vida Severina is a Christmas play in verse about the Brazilian Northeast.",
};

// Heteronym-aware lookup: "Fernando Pessoa (Álvaro de Campos)" → falls back to
// "Fernando Pessoa" if the exact key isn't present.
export function getAuthorBio(author: string): string | undefined {
  const exact = authors[author];
  if (exact !== undefined) return exact || undefined; // empty string → undefined (e.g. Anonymous)
  const base = author.replace(/\s*\([^)]+\)\s*/g, "").trim();
  const bio = authors[base];
  return bio || undefined;
}
