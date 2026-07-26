# Mohammed Tariq — Portfolio (Next.js)

Tech-noir developer portfolio built with Next.js (App Router) + Tailwind CSS, converted from a Stitch design. SEO-ready: per-page metadata, Open Graph/Twitter tags, JSON-LD person schema, sitemap.xml, and robots.txt.

## Pages

- `/` — Hero (WebGL liquid-metal shader + Three.js tech core)
- `/projects` — Deployed assets bento grid
- `/about` — Technical stack + career timeline
- `/contact` — Terminal-style uplink form

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Don't run `npm run build` while `npm run dev` is running — they share `.next`
> and the dev server will start throwing `Cannot find module` errors. Stop dev
> first, or `rm -rf .next` afterwards.

## Production

```bash
npm run build
npm start
```

## Contact form

`components/UplinkForm.jsx` posts to the `app/api/contact/route.js` API route,
which sends mail through [Resend](https://resend.com) to the address in
`TO_ADDRESS`. To enable it:

1. Create an API key at https://resend.com/api-keys (free tier: 100 emails/day).
2. `cp .env.local.example .env.local` and fill in `RESEND_API_KEY`.
3. On Vercel, add `RESEND_API_KEY` under Project Settings → Environment Variables.

Without a key the route returns HTTP 500 and the form shows
`TRANSMISSION_FAILED :: RETRY`. Mail is sent from `onboarding@resend.dev`, which
works without a verified domain; once you verify your own domain in Resend,
change the `from` address in the route so replies and deliverability are yours.

## Icon font

Material Symbols is self-hosted at `public/fonts/material-symbols-<hash>.woff2`,
subset to only the icons the site actually renders (~5 kB instead of ~446 kB).
**If you add a new `material-symbols-outlined` icon, it will render as its literal
name in text until you regenerate the subset.** Add the new name to the list and
re-download:

```bash
curl -s "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=account_balance,architecture,arrow_forward,build,cloud,code,dns,grid_view,hub,info,memory,monitoring,neurology,psychology,real_estate_agent,schema,security,terminal,verified_user&display=block"
```

That returns CSS containing a `fonts.gstatic.com` URL. Download it, then name the
file after its own content hash and point `@font-face` in `app/globals.css` at the
new name — reusing the old filename leaves browsers on a cached, stale subset:

```bash
curl -s -o /tmp/ms.woff2 "<gstatic-url-from-the-css-above>"
H=$(md5 -q /tmp/ms.woff2 | cut -c1-8) && mv /tmp/ms.woff2 "public/fonts/material-symbols-$H.woff2" && echo "$H"
```

## Skill cluster (about page)

The TECHNICAL_STACK cluster renders brand logos from
[simple-icons](https://simpleicons.org) (CC0), inlined into `lib/skill-icons.js`
so the page makes no network request for them. Each tile is tinted and lit with
that brand's official hex.

To add or remove a skill, edit the `SKILLS` list in `scripts/gen-skill-icons.js`
and regenerate:

```bash
node scripts/gen-skill-icons.js
```

Brands simple-icons no longer ships (Amazon, Microsoft, and similar trademark
removals) are rendered as monogram tiles via the `MONOGRAMS` list in the same
file. Check any new brand colour for 4.5:1 contrast against `#171717` — that is
what pushed Zustand's violet from `#8B5CF6` to `#A78BFA`.

## Before deploying

- Canonical domain is `https://mohammedtariq.com` (set in `lib/site.js`, override
  per-environment with `NEXT_PUBLIC_SITE_URL`). If you also own another TLD, 301
  it to this one rather than serving the same content at both.
- Add `RESEND_API_KEY` in Vercel → Project Settings → Environment Variables.
  `.env.local` is local-only and never deploys.
- **Once `mohammedtariq.com` is verified in Resend**, change the `from` address
  in `app/api/contact/route.js` from `onboarding@resend.dev` to an address on
  your own domain. Do not change it before verifying — sends will fail. The
  shared `resend.dev` sender also only delivers to the Resend account owner's
  own address, and lands in spam more often.

Deploys cleanly to Vercel with zero config.
