# Mehansh Platform

A reference-led, static React showcase for Mehansh Platform. The site presents four verticals: Mehansh Hospitality, Mehansh Celebration, Rahgir, and Mehansh Distribution.

## Content model

Service content is consolidated in `client/src/data/services.ts`. The data model owns canonical labels, descriptions, project groupings, image paths, alt text, and the distribution brand cards. Missing contact values are represented as `null` and render as non-interactive “Contact details coming soon” states rather than broken links.

## Routes

- `/` — editorial landing page
- `/services/ber`
- `/services/beyond-silli-chilli`
- `/services/viit`
- `/services/hotel-lonavilla`
- `/services/hotel-lxa`
- `/services/rahgir`
- `/services/distribution`

## Local development

```bash
pnpm install
pnpm dev
```

Run the production checks with:

```bash
pnpm check
pnpm build
```

The static build is emitted to `dist/public`. The `start` script uses `vite preview`; there is no application server or database layer.

## Asset rules

All deployed imagery lives in `client/public/assets` and is referenced with repository-local paths. Hero and service images include explicit dimensions; the homepage hero uses responsive WebP sources with a JPEG fallback. Large obsolete source images are intentionally excluded from the production tree.

## SEO

The entry document includes default title, description, Open Graph, Twitter, favicon, and canonical metadata. `RouteMeta.tsx` updates metadata and JSON-LD for each route. `robots.txt` and `sitemap.xml` are served from `client/public`.

## Contact data

Official owner and Saurabh Anand email/phone values were not present in the source brief. Add them in `client/src/data/services.ts` when confirmed; the runtime guard will then create the corresponding `mailto:` or `tel:` link.
