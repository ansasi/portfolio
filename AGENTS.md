# AGENTS.md

Guidance for AI coding agents (Claude Code, Cursor, Codex, Copilot, etc.)
working in this repository.

## Project

Personal portfolio for **Angel Sanchez Sierra** — Cloud Data Engineer, Web
Developer and Cloud Architect. A static single-page app deployed on Vercel
at https://angelsanchez-portfolio.vercel.app/.

Content is edited via [Pages CMS](https://app.pagescms.org) (schema in
`.pages.yml`, content as JSON in `content/`). Project screenshots are
CMS-managed media under `public/portfolio/`.

## Stack

- **Build:** Vite 5 (`vite.config.js`) with `@vitejs/plugin-react`
- **UI:** React 18 (functional components, hooks; no TypeScript)
- **Styling:** SCSS via `sass-embedded` (modern compiler API). Each
  container/component co-locates its `.scss` file.
- **Animation:** `framer-motion`
- **Forms:** `@emailjs/browser` for the contact form
- **Misc UI:** `react-icons`, `react-hot-toast`, `react-tooltip`,
  `react-vertical-timeline-component`
- **Lint:** Flat-config ESLint 9 with `eslint-plugin-react`,
  `react-hooks`, `react-refresh`
- **Hosting:** Vercel (auto-deploys on push)
- **Content CMS:** Pages CMS — schema in `.pages.yml`

## Repository layout

```
content/                JSON content edited via Pages CMS
  about.json            About-section cards
  experience.json       Work experience timeline
  portfolio.json        Project cards
  settings.json         Site-wide strings (taglines, contact, social)
  skills.json           Skills list
public/portfolio/       Project screenshots (CMS-managed media)
src/
  App.jsx               Root component — composes page sections
  main.jsx              React entry
  App.scss, index.css   Global styles
  assets/               Static images
  components/           Shared UI (Navbar, FloatingNavbar, Footer,
                        NavigationDots, SocialMedia)
  container/            Page sections (Header, About, Skills, Portfolio,
                        Experience, Contact, Testimonial)
  constants/            images.js (icon map), defaultData.js, JSON loaders
  wrapper/              HOCs — AppWrap, MotionWrap
.pages.yml              Pages CMS schema
eslint.config.js        Flat ESLint config
vite.config.js          Vite config
```

Each `container/<Section>/` and `components/<Component>/` folder
typically contains the JSX file, a co-located `.scss` file, and an
`index.js` re-export.

## Commands

```bash
npm install
npm run dev      # Vite dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint over the project
```

There is no test suite — verify changes by running `npm run lint` and,
for UI changes, `npm run dev` and exercising the affected section in a
browser.

## Conventions for agents

- **Language:** JavaScript only (`.js` / `.jsx`). Do not introduce
  TypeScript. Use ES module `import`/`export` syntax.
- **React:** Functional components and hooks only. Keep components
  small; one component per file. Re-export through the section's
  `index.js`.
- **Styling:** Add a sibling `.scss` file next to each new component and
  import it from the JSX. Stick to SCSS — do not introduce
  CSS-in-JS, Tailwind, or CSS Modules.
- **Animation:** Use `framer-motion` (`motion.div`, `AnimatePresence`)
  and the `MotionWrap` HOC for section-level animation; match the
  existing easing / duration patterns.
- **Content:** Editable copy belongs in `content/*.json`, not in JSX.
  If you add a new field, update both the JSON file and the
  corresponding schema entry in `.pages.yml` so it stays editable from
  Pages CMS.
- **Images:** Reference project screenshots as `/portfolio/<file>`
  (served from `public/portfolio/`). Static icons go through
  `src/constants/images.js`.
- **Icons:** Prefer `react-icons` packages already in use before adding
  a new icon library.
- **Lint:** `npm run lint` must pass. Don't disable rules to silence
  warnings — fix the underlying issue.
- **Dependencies:** Don't add a new dependency for something already
  achievable with the current stack. If you must, justify it in the PR
  description.
- **CMS schema:** Any change to the shape of `content/*.json` requires
  a matching update to `.pages.yml`, otherwise editors will break in
  Pages CMS.

## Things to avoid

- TypeScript, Tailwind, Next.js, CRA migration — out of scope.
- Hard-coding strings that should live in `content/settings.json`.
- Editing files under `public/portfolio/` by hand — those are managed
  by Pages CMS.
- Force-pushing or rewriting history on `main` (Vercel deploys from
  it).

## Deploy

Vercel watches the repository and rebuilds on every push to the
deploy branch. There is no separate deploy step.
