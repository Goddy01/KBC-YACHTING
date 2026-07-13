# KBC Yachting — Premium Prototype

Client-facing marketing prototype for **KBC Yachting**, a luxury brokerage in Port-Grimaud (Gulf of Saint-Tropez): yachts, boats, and villas/apartments.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next-intl (French default, English)
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to `/fr`.

## Deploy

Push to GitHub and import in Vercel (zero env vars required).

## Pages

| Route | Description |
|-------|-------------|
| `/[locale]` | Cinematic home |
| `/[locale]/yachts` | Fleet listing + sale/rent filters |
| `/[locale]/yachts/cheoy-lee` | Sample yacht detail |
| `/[locale]/villas` | Villas & apartments |
| `/[locale]/about` | Brand story & team |
| `/[locale]/contact` | Contact form (UI-only) |

Toggle **FR / EN** in the header; locale persists across pages.
