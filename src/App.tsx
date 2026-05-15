import { useState, useRef, useEffect } from "react";
import { selectQuote, type Selection } from "./lib/match";
import type { Tag, Lang } from "./data/quotes";

type View = "input" | "quote";

const QUESTIONS: { lang: Lang; text: string }[] = [
  { lang: "en", text: "How are you, really?" },
  { lang: "fr", text: "Comment tu vas, vraiment ?" },
  { lang: "pt", text: "Como estás, na verdade?" },
];

const PLACEHOLDER = [
  "i'm tired and a little sad",
  "estou cansado mas em paz",
  "j'ai le cafard, je sais pas pourquoi",
].join("\n");

const VIEW_OUT_MS = 260;

export default function App() {
  const [view, setView] = useState<View>("input");
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [mood, setMood] = useState("");
  const [selection, setSelection] = useState<Selection | null>(null);
  const [seenIds, setSeenIds] = useState<number[]>([]);
  const [rejectedTags, setRejectedTags] = useState<Tag[]>([]);
  const [quoteKey, setQuoteKey] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (view === "input" && phase === "in") textareaRef.current?.focus();
  }, [view, phase]);

  // Rotate the question through languages while the input is empty.
  // Once the user types, freeze on the current language so the title
  // stops jumping around while they think.
  useEffect(() => {
    if (view !== "input" || mood.length > 0) return;
    const id = setInterval(() => {
      setQuestionIdx((i) => (i + 1) % QUESTIONS.length);
    }, 2800);
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

  const currentQuestion = QUESTIONS[questionIdx];

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
              key={questionIdx}
              lang={currentQuestion.lang}
              className="block font-serif text-3xl sm:text-4xl leading-tight text-neutral-900 dark:text-neutral-100 question-cycle"
            >
              {currentQuestion.text}
            </label>
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
              rows={4}
              placeholder={PLACEHOLDER}
              className="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none resize-none font-serif text-xl sm:text-2xl leading-relaxed placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors py-2"
            />
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
              <div key={quoteKey} className="fade-enter space-y-10">
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
              </div>
              <div className="flex items-center gap-6 pt-4">
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
