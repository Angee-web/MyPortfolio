# Adaeze Angelica Ugwumba — Portfolio

A static, single-page portfolio for a frontend engineer applying for frontend roles. Built with React, TypeScript, Vite, Tailwind CSS v4, Motion, and React Router.

## Prerequisites

- **Node.js 22.22 or later.** React Router 8 requires it. Check with `node -v`.
- **pnpm 10** (any recent pnpm 10.x). Install with `npm i -g pnpm` if needed.

## Install and run

```bash
pnpm install        # install dependencies
pnpm dev            # start the dev server at http://localhost:5173
```

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Local development server with hot reload |
| `pnpm typecheck` | TypeScript project check (`tsc -b`) |
| `pnpm lint` | ESLint across the project |
| `pnpm test` | Unit and routing tests (Vitest + React Testing Library) |
| `pnpm build` | Type check, then production build into `dist/` |
| `pnpm preview` | Serve the production build locally to check it |

## Project structure

```
src/
  content/            All copy and facts. Edit these files to change the site.
    profile.ts        Name, intro, About paragraphs, email, links, CV flag
    projects.ts       Case studies (one object per project)
    experience.ts     Roles and skill groups
    types.ts          Shared content types
  components/
    layout/           Header (with mobile menu), footer, site layout, nav config
    home/             Hero, work grid, about, skills, contact
    illustrations/    Conceptual diagrams (MFE boundary, step flows) and their frame
    ui/               Reveal (scroll animation), buttons, tags, section headings
  pages/              Home, case study, and 404 pages
  lib/                Small hooks (active section, document title) and motion tokens
  test/               Content integrity and navigation tests
public/               Favicon, robots.txt, Open Graph image, and the CV folder
```

Content lives in `src/content/`. Components only render it, so most edits never touch layout code.

## Adding your email

Open [src/content/profile.ts](src/content/profile.ts) and set:

```ts
email: 'you@example.com',
```

While `email` is an empty string, no mailto link appears anywhere on the site. The LinkedIn and GitHub links are already set.

## Attaching your CV

1. Copy your PDF to `public/cv/Adaeze-Ugwumba-CV.pdf`. The filename must match the `href` in `profile.ts`, or change the `href` to match your file.
2. In [src/content/profile.ts](src/content/profile.ts), set `cv.available: true`.

While `available` is `false`, the CV link stays hidden, so the site never links to a missing file.

## Updating case studies

Each project in [src/content/projects.ts](src/content/projects.ts) has:

- `summary`, `ownership`, and `tags` for the home-page card
- `caseStudy` with `overview`, `challenge`, `responsibilities`, `approach`, `decisions`, `deliverables`, `technologies`, and `learned`
- `diagram`, either `{ kind: 'mfe' }` or a `{ kind: 'flow', caption, steps }` sequence
- `related` (optional), a cross-reference to another case study

Keep each claim to work you can stand behind. The test suite (`src/test/content.test.ts`) checks that required sections are filled in, that cross-references resolve, and that no percentages slipped into the copy.

To add a project, append an object to the `projects` array with a unique `slug` and the next `number`, then run `pnpm test`.

## Replacing visuals

The site uses no product screenshots. Diagrams are drawn in HTML and CSS ([src/components/illustrations/](src/components/illustrations/)) and are labelled as conceptual on the page. If you later have screenshots you are allowed to publish, add them under `public/` and render them in a case-study component. Confirm that any screenshot contains no confidential interface, customer data, or internal URLs before publishing it.

## Experience dates

[src/content/experience.ts](src/content/experience.ts) has the Moniepoint period as `May 2025 – Nov 2026`. Adjust the end date to match your actual employment.

## Deploying to Vercel

The project includes [vercel.json](vercel.json), which sets the build command, output folder, and a rewrite so deep links like `/work/kyc-onboarding-workflows` load the app.

1. Push the project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite. Confirm the settings:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: `dist`
   - Node.js version: 22.x (Settings → General → Node.js Version)
4. Click **Deploy**. Vercel gives you a `*.vercel.app` URL.
5. Optional: add a custom domain under **Settings → Domains**.

Any static host that supports SPA rewrites also works (Netlify, Cloudflare Pages). Netlify needs a `_redirects` file containing `/* /index.html 200`.

### After you have the public URL

- `index.html` uses relative Open Graph image paths (`/og-image.png`). Some link previewers need absolute URLs. Replace `og:image` and `twitter:image` with `https://your-domain/og-image.png` once you know the domain.
- Add a `<link rel="canonical">` with the same domain if you want search engines to prefer it.
- Case-study page titles are set in the browser after load. Search engines can read them, but the site does not pre-render routes. If you want pre-rendered HTML for every case study, that would need a static-generation step, which this project does not include.

## Accessibility and motion

- Every control is a native link or button with a visible focus ring. A skip link is the first tab stop.
- The mobile menu is a disclosure: `aria-expanded` and `aria-controls` are set, Escape closes it, and focus returns to the toggle.
- Route changes move focus to the page content and reset scroll position.
- With `prefers-reduced-motion: reduce`, the site removes movement and smooth scrolling. Fades remain so content still appears.

## Privacy and confidentiality

The content deliberately omits proprietary code, internal URLs, API payloads, feature-flag names, customer data, and internal implementation details. Keep it that way when you extend the case studies.
