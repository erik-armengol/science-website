# Erik Armengol · Research website

A static Astro portfolio for publications, research interests, and future ML projects.

## Develop

Use Node.js 24 or later and pnpm (or npm).

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Edit the bio in `src/pages/index.astro`, papers in `src/data/publications.ts`, and design in `src/styles/global.css`. Publication years refer to the journal publication or initial preprint submission. Personal projects are intentionally omitted until there is real work to share. Add a projects page and navigation link when ready.

## GitHub Pages

In the repository's Settings → Pages, choose **GitHub Actions** as the source. Pushing to `main` runs `.github/workflows/deploy.yml`. The default site address is `https://erik-armengol.github.io/science-website/`.

## Personal domain

Once the domain is confirmed, set `site` to its HTTPS URL and `base` to `/` in `astro.config.mjs` (or supply `SITE_URL` and `BASE_PATH` to the build). Configure the custom domain in GitHub Pages and its DNS records with your domain provider, then enable HTTPS. No custom domain is assumed from the email address.

## Content and privacy

Publication metadata was transcribed from the supplied CV and checked against publisher/arXiv pages. The full CV is not distributed in the site because it includes a personal phone number. Contact uses the supplied professional email, Scholar, LinkedIn, and GitHub links. Fonts load from Google Fonts with local fallback fonts.
