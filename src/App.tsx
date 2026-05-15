import { useState, useRef, useEffect } from "react";
import { selectQuote, type Selection } from "./lib/match";
import type { Tag } from "./data/quotes";

type View = "input" | "quote";

export default function App() {
  const [view, setView] = useState<View>("input");
  const [mood, setMood] = useState("");
  const [selection, setSelection] = useState<Selection | null>(null);
  const [seenIds, setSeenIds] = useState<number[]>([]);
  const [rejectedTags, setRejectedTags] = useState<Tag[]>([]);
  const [fadeKey, setFadeKey] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (view === "input") textareaRef.current?.focus();
  }, [view]);

  const submit = () => {
    if (!mood.trim()) return;
    const result = selectQuote(mood, { excludedIds: seenIds });
    setSelection(result);
    setSeenIds((ids) => [...ids, result.quote.id]);
    setRejectedTags([]);
    setFadeKey((k) => k + 1);
    setView("quote");
  };

  const handleAnother = () => {
    const result = selectQuote(mood, { excludedIds: seenIds, excludedTags: rejectedTags });
    setSelection(result);
    setSeenIds((ids) => [...ids, result.quote.id]);
    setFadeKey((k) => k + 1);
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
    setFadeKey((k) => k + 1);
  };

  const handleBack = () => {
    setView("input");
    setSelection(null);
    setRejectedTags([]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 sm:py-24">
      <div className="w-full max-w-2xl">
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
              className="block font-serif text-3xl sm:text-4xl leading-tight text-neutral-900 dark:text-neutral-100"
            >
              How are you, really?
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
              rows={3}
              placeholder="exhausted but okay. sad about nothing in particular. anything."
              className="w-full bg-transparent border-0 border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100 outline-none resize-none font-serif text-2xl sm:text-3xl leading-snug placeholder:text-neutral-400 dark:placeholder:text-neutral-600 transition-colors py-2"
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={!mood.trim()}
                className="text-sm tracking-wide uppercase text-neutral-900 dark:text-neutral-100 border-b border-neutral-900 dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
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
            <div key={fadeKey} className="fade-enter space-y-10">
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
