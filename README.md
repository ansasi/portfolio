# Personal portfolio

Personal portfolio for Angel Sanchez Sierra — Cloud Data Engineer, Web
Developer and Cloud Architect.

Live: https://angelsanchez-portfolio.vercel.app/

## Stack

- **Vite + React 18** for the SPA
- **SCSS** for styling, **Framer Motion** for animation
- **EmailJS** for the contact form
- **Pages CMS** for editing all site content from a web UI (config in
  [`.pages.yml`](./.pages.yml), content in [`content/`](./content))

## Local development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # production build
npm run lint     # ESLint
```

## Editing content with Pages CMS

All the editable copy (header taglines, about cards, work experience,
portfolio projects, skills, contact details) lives as JSON in
[`content/`](./content). The schema for the CMS is in
[`.pages.yml`](./.pages.yml).

To edit content from a browser:

1. Go to https://app.pagescms.org and sign in with GitHub.
2. Authorize Pages CMS to access the `ansasi/portfolio` repository.
3. Open the project — you'll see collections for **Site settings**,
   **About cards**, **Work experience**, **Projects** and **Skills**.
4. Edit any field; Pages CMS commits the change to the configured branch.
5. Vercel rebuilds the site automatically on push.

Portfolio screenshots are uploaded by the CMS to
[`public/portfolio/`](./public/portfolio) and referenced from the JSON
as `/portfolio/<filename>`.

## Project layout

```
content/                JSON content edited via Pages CMS
public/portfolio/       Project screenshots (CMS-managed media)
src/
  components/           Shared UI (Navbar, Footer, SocialMedia, …)
  container/            Page sections (Header, About, Skills, …)
  constants/            Static images map + loaders for content JSON
  wrapper/              HOCs (AppWrap, MotionWrap)
.pages.yml              Pages CMS schema
```
