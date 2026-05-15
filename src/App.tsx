import { useState, useRef, useEffect } from "react";
import { selectQuote, type Selection } from "./lib/match";
import type { Tag, Lang } from "./data/quotes";
import { getAuthorBio } from "./data/authors";

type View = "input" | "quote";

const PROMPTS: { lang: Lang; question: string; example: string }[] = [
  { lang: "en", question: "How are you, really?", example: "i'm tired and a little sad" },
  { lang: "fr", question: "Comment tu vas, vraiment ?", example: "ça va, calme, presque heureux" },
  { lang: "pt", question: "Como estás, na verdade?", example: "estou cansado mas em paz" },
  { lang: "en", question: "How are you, really?", example: "grateful, for once, without a reason" },
  { lang: "fr", question: "Comment tu vas, vraiment ?", example: "j'ai le cafard, je sais pas pourquoi" },
  { lang: "pt", question: "Como estás, na verdade?", example: "amo essa manhã, do nada" },
];

const VIEW_OUT_MS = 260;
const CYCLE_MS = 2800;

export default function App() {
  const [view, setView] = useState<View>("input");
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [mood, setMood] = useState("");
  const [selection, setSelection] = useState<Selection | null>(null);
  const [seenIds, setSeenIds] = useState<number[]>([]);
  const [rejectedTags, setRejectedTags] = useState<Tag[]>([]);
  const [quoteKey, setQuoteKey] = useState(0);
  const [promptIdx, setPromptIdx] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (view === "input" && phase === "in") textareaRef.current?.focus();
  }, [view, phase]);

  // Cycle the question + example through EN/FR/PT while the textarea is empty.
  // Freeze on the current language once the user starts typing.
  useEffect(() => {
    if (view !== "input" || mood.length > 0) return;
    const id = setInterval(() => {
      setPromptIdx((i) => (i + 1) % PROMPTS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [view, mood]);

  const transitionTo = (newView: View, before?: () => void) => {
    setPhase("out");
    window.setTimeout(() => {
      before?.();
      setView(newView);
      setPhase("in");
    }, VIEW_OUT_MS);
  };

  const submit = () => {
    if (!mood.trim()) return;
    transitionTo("quote", () => {
      const result = selectQuote(mood, { excludedIds: seenIds });
      setSelection(result);
      setSeenIds((ids) => [...ids, result.quote.id]);
      setRejectedTags([]);
      setQuoteKey((k) => k + 1);
    });
  };

  const handleAnother = () => {
    const result = selectQuote(mood, { excludedIds: seenIds, excludedTags: rejectedTags });
    setSelection(result);
    setSeenIds((ids) => [...ids, result.quote.id]);
    setQuoteKey((k) => k + 1);
  };

  const handleDoesntFit = () => {
    if (!selection) return;
    const tagsToReject = selection.quote.tags.filter((t) =>
      selection.matchedTags.includes(t),
    );
    const newRejected = Array.from(new Set([...rejectedTags, ...tagsToReject]));
    setRejectedTags(newRejected);
    const result = selectQuote(mood, { excludedIds: seenIds, excludedTags: newRejected });
    setSelection(result);
    setSeenIds((ids) => [...ids, result.quote.id]);
    setQuoteKey((k) => k + 1);
  };

  const handleBack = () => {
    transitionTo("input", () => {
      setSelection(null);
      setRejectedTags([]);
    });
  };

  const prompt = PROMPTS[promptIdx];
  const bio = selection ? getAuthorBio(selection.quote.author) : undefined;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 sm:py-24">
      <div className={`w-full max-w-2xl ${phase === "out" ? "view-leave" : "view-enter"}`}>
        {view === "input" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="space-y-8"
          >
            <p className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
              mood-improver
            </p>
            <label
              htmlFor="mood"
              key={`q-${promptIdx}`}
              lang={prompt.lang}
              className="block font-serif text-3xl sm:text-4xl leading-tight text-neutral-900 dark:text-neutral-100 question-cycle"
            >
              {prompt.question}
            </label>
            <div className="relative">
              <textarea
                ref={textareaRef}
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit();
                  }
                }}
                rows={3}
                placeholder=""
                className="relative w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none resize-none font-serif text-xl sm:text-2xl leading-relaxed transition-colors py-2"
              />
              {mood.length === 0 && (
                <p
                  key={`e-${promptIdx}`}
                  lang={prompt.lang}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 left-0 right-0 font-serif text-xl sm:text-2xl leading-relaxed text-neutral-400 dark:text-neutral-600 italic question-cycle"
                >
                  {prompt.example}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={!mood.trim()}
                className="text-sm tracking-wide uppercase text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed disabled:border-neutral-400 dark:disabled:border-neutral-700"
              >
                Find a quote →
              </button>
              <p className="text-xs text-neutral-400 dark:text-neutral-600">
                Enter to submit
              </p>
            </div>
          </form>
        ) : (
          selection && (
            <div className="space-y-10">
              <div key={quoteKey} className="fade-enter space-y-8">
                <blockquote
                  lang={selection.quote.lang}
                  className="font-serif text-2xl sm:text-3xl leading-snug text-neutral-900 dark:text-neutral-100"
                >
                  <span className="text-neutral-300 dark:text-neutral-700 select-none">
                    &ldquo;
                  </span>
                  {selection.quote.text}
                  <span className="text-neutral-300 dark:text-neutral-700 select-none">
                    &rdquo;
                  </span>
                </blockquote>
                <footer className="text-sm text-neutral-600 dark:text-neutral-400">
                  — {selection.quote.author}
                  {selection.quote.source && (
                    <>
                      , <em className="font-serif">{selection.quote.source}</em>
                    </>
                  )}
                </footer>
                {(bio || selection.quote.explanation) && (
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3 text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-500 max-w-xl">
                    {bio && <p className="italic">{bio}</p>}
                    {selection.quote.explanation && <p>{selection.quote.explanation}</p>}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-6 pt-2">
                <button
                  onClick={handleAnother}
                  className="text-sm tracking-wide uppercase text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
                >
                  Another
                </button>
                <button
                  onClick={handleDoesntFit}
                  className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Doesn't fit
                </button>
                <button
                  onClick={handleBack}
                  className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ml-auto"
                >
                  ← Back
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}
