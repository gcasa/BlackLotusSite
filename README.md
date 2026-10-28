# Black Lotus Incorporated

A static studio and consulting website built with React and Next.js. The production
build exports HTML, CSS, JavaScript, images, and fonts into `out/`. Hosting requires
no Node.js process, Cloudflare worker, database, or application server.

## Build locally

Use Node.js 22.13 or newer:

```sh
npm ci
npm run build
```

Upload the contents of `out/` to any static host. For a local HTTP preview, run
`python3 -m http.server 8080 --directory out` and open `http://localhost:8080`.
The site is intended for HTTP hosting, rather than opening HTML via `file://`.
Google Fonts are downloaded at build time and served from the exported site.

For a site hosted under a subdirectory, set its path at build time:

```sh
NEXT_PUBLIC_BASE_PATH=/BlackLotusSite npm run build
```

Use an empty base path (the default) for a domain-root or custom-domain deployment.
Do not include a trailing slash in `NEXT_PUBLIC_BASE_PATH`.
For another hosting domain, set `NEXT_PUBLIC_SITE_URL` to its origin (for example,
`https://example.com`) so social-preview images use the correct absolute URLs.
It defaults to `https://gcasa.github.io`; the Pages workflow sets it automatically.

## GitHub Pages

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. Push to `main`, or manually run **Deploy static site to GitHub Pages** in Actions.

The workflow obtains the base path from GitHub Pages, builds and tests the static
export, and deploys `out/`. It supports both repository Pages paths and custom
domains. If the publishing branch differs from `main`, update the workflow trigger
in `.github/workflows/pages.yml`.

## Product downloads

The page links to `downloads/MacBasic.zip`, `downloads/ScoreMaker.zip`, and
`downloads/ScrubBit.zip`. These archives are not included in this repository.
Place the release files in `public/downloads/` before building to make those links
work. SalonSync remains a link to its separately hosted application.

## Development and checks

- `npm run dev`: existing vinext development preview
- `npm run build`: static export to `out/`
- `npm test`: build and verify exported content and asset paths
- `NEXT_PUBLIC_BASE_PATH=/BlackLotusSite npm test`: verify a project Pages build
- `npm run lint`: lint source files
- `npm run build:server`: original Cloudflare/vinext build, if needed

Edit content in `app/page.tsx` and styles in `app/globals.css`.
