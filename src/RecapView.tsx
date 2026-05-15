import { useState, useMemo } from "react";
import { quotes } from "./data/quotes";
import { clearHistory, computeRecap, getHistory } from "./lib/history";

interface Props {
  onBack: () => void;
}

export function RecapView({ onBack }: Props) {
  const [refreshKey, setRefreshKey] = useState(0);
  const recap = useMemo(() => computeRecap(getHistory()), [refreshKey]);

  const findQuote = (id: number) => quotes.find((q) => q.id === id);

  const handleClear = () => {
    if (window.confirm("Clear everything? This cannot be undone.")) {
      clearHistory();
      setRefreshKey((k) => k + 1);
    }
  };

  if (!recap.unlocked) {
    return (
      <div className="space-y-10">
        <p className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
          mood-improver
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100">
          look back
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          come back after a few more sessions.
        </p>
        <div className="flex justify-end pt-8">
          <button
            onClick={onBack}
            className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            ← back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-14">
      <div className="space-y-3">
        <p className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
          mood-improver
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-100">
          look back
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          on the last 30 days
        </p>
      </div>

      {recap.topWords.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-lg sm:text-xl text-neutral-800 dark:text-neutral-200">
            words you've been carrying
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {recap.topWords.join(" · ")}
          </p>
        </section>
      )}

      {recap.topTags.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-lg sm:text-xl text-neutral-800 dark:text-neutral-200">
            what you've been feeling
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {recap.topTags.join(", ")}
          </p>
        </section>
      )}

      {recap.repeatedQuoteIds.length > 0 && (
        <section className="space-y-5">
          <h2 className="font-serif text-lg sm:text-xl text-neutral-800 dark:text-neutral-200">
            quotes you've seen more than once
          </h2>
          <div className="space-y-5">
            {recap.repeatedQuoteIds.map((id) => {
              const q = findQuote(id);
              if (!q) return null;
              return (
                <div key={id} className="space-y-1">
                  <blockquote
                    lang={q.lang}
                    className="font-serif text-base sm:text-lg leading-snug text-neutral-700 dark:text-neutral-300 italic"
                  >
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    — {q.author}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {recap.rejectedTotal > 1 && recap.rejectedQuoteIds.length > 0 && (
        <section className="space-y-5">
          <h2 className="font-serif text-lg sm:text-xl text-neutral-800 dark:text-neutral-200">
            quotes you sent away
          </h2>
          <div className="space-y-5">
            {recap.rejectedQuoteIds.map((id) => {
              const q = findQuote(id);
              if (!q) return null;
              return (
                <div key={id} className="space-y-1">
                  <blockquote
                    lang={q.lang}
                    className="font-serif text-base sm:text-lg leading-snug text-neutral-700 dark:text-neutral-300 italic"
                  >
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    — {q.author}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <p className="font-serif text-base italic text-neutral-600 dark:text-neutral-400 pt-2">
        this is what you've felt. nothing to fix.
      </p>

      <div className="flex items-center justify-between pt-6">
        <button
          onClick={handleClear}
          className="text-xs tracking-wide uppercase text-neutral-400 dark:text-neutral-600 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          clear all history
        </button>
        <button
          onClick={onBack}
          className="text-sm tracking-wide uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← back
        </button>
      </div>
    </div>
  );
}
