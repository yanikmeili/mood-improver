# mood-improver

A quote that meets the mood you're in. No "Believe in yourself."

You type how you feel — anything, any length. The app finds a curated quote
that matches: Marcus Aurelius, Cioran, Pessoa, Rumi, DFW, Annie Dillard,
Anne Carson, Etty Hillesum, and others worth reading.

## Stack

- Vite + React 19 + TypeScript
- Tailwind v4
- Static JSON of ~100 hand-curated quotes — no API, no key, no backend
- Keyword-based mood-to-tag matcher with negation handling

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## How selection works

1. Your input is split into clauses on conjunctions (`but`, `however`, …) and
   punctuation.
2. Negated clauses (`not`, `no`, `n't`, …) are dropped, so "I'm not sad" doesn't
   match `melancholy`.
3. Keywords in each clause score emotional tags (`exhaustion`, `grief`,
   `tenderness`, `defiance`, `wonder`, etc.).
4. The matcher first looks for quotes carrying **≥2** of the scored tags
   (intersection). If empty, it falls back to **any** of them (union). If still
   empty, it widens to **adjacent** tags (e.g. `melancholy` ↔ `grief`,
   `emptiness`, `loneliness`). Last resort: a random quote, with a small note
   telling you the mood wasn't read.
5. **Another** redraws inside the same matched set. **Doesn't fit** excludes
   the rejected tags and tries again. **← Back** returns to the input.

Limits, honestly: keyword matching has no semantic understanding. Sarcasm and
typos fall through. The set is small on purpose — quality over quantity.

## Adding quotes

Edit `src/data/quotes.ts`. Each entry needs:

```ts
{
  id: <next integer>,
  text: "…",
  author: "First Last",
  source: "Optional Book Title",
  tags: ["one", "or", "more", "tags"],
}
```

Available tags are in `ALL_TAGS` at the top of the same file. Rule of the
house: don't add a quote you can't verify. If the attribution is fuzzy,
leave it out.

## Adjusting the matcher

Keywords live in `LEXICON` in `src/lib/match.ts`. Adjacency between tags lives
in `ADJACENT` just below. Both are plain TS objects — add or refine freely.

## Deploy to GitHub Pages

The repo ships with `.github/workflows/deploy.yml`. After pushing to GitHub:

1. In the repo, go to **Settings → Pages → Build and deployment → Source**
   and pick **GitHub Actions**.
2. Push to `main`. The workflow builds and deploys.
3. The site lives at `https://<user>.github.io/mood-improver/`.

If you fork or rename the repo, update `base` in `vite.config.ts` to match.

## License

Quotes belong to their authors. Code: do what you want.
