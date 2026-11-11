# Mini Bee · web

Mobile-first website for Mini Bee kids' desks: home page, a page per model, WhatsApp ordering with prefilled options, Birmarket link, size guide, FAQ.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS 4. No backend; every page is generated at build time.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in your WhatsApp number, Instagram, Birmarket link
npm run dev                  # http://localhost:3000
```

## Edit content

| What | Where |
|---|---|
| Models (name, text, features, dimensions, options, price) | `src/data/models.ts` |
| Benefits, ordering steps, size guide, FAQ | `src/data/content.ts` |
| Product images | `public/images/` |
| Catalog PDF for showrooms | `public/katalog.pdf` |
| Colors and fonts | `src/app/globals.css`, `src/app/layout.tsx` |

Add a model: add an entry to `models` in `src/data/models.ts` and its images to `public/images/`. Its page appears at `/modeller/<slug>` automatically.

Set a price: `priceFrom: 490` on a model. Without it the site shows "Qiymət üçün yazın".

Placeholders to replace: search the project for `[X]` and `[şərt]` (production days, delivery, warranty).

## Deploy to Vercel

1. Push to a GitHub repo.
2. vercel.com → Add New → Project → import the repo (framework: Next.js, defaults are fine).
3. Settings → Environment Variables: add the values from `.env.example`.
4. Deploy. Every push to `main` deploys again; pull requests get preview links.
5. Domain: Settings → Domains → add e.g. `minibee.az` and set the DNS records Vercel shows at your registrar.

Note: Vercel's free Hobby plan is for non-commercial use. For the live business site use Vercel Pro, or another host that allows commercial use on its free tier.
