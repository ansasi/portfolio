# CLAUDE.md

Project guidance for Claude Code lives in [`AGENTS.md`](./AGENTS.md) —
that file is the source of truth for stack, layout, commands, and
conventions, and is shared across all coding agents (Claude Code,
Cursor, Codex, Copilot, …).

Please read `AGENTS.md` before making changes.

## Claude Code specifics

- When working on UI, run `npm run dev` and verify the change in a
  browser before reporting the task as complete — there is no test
  suite to fall back on.
- Always run `npm run lint` after touching `.js` / `.jsx` files.

## Installed skills

Skills are installed via the [skills.sh](https://skills.sh) CLI
(`npx skills add <owner/repo>`). The lock file is `skills-lock.json`;
to restore on a fresh checkout, run `npx skills experimental_install`.

Skills live under `.claude/skills/`:

| Skill | Use it when |
|---|---|
| `frontend-design` | Building or restyling React components / sections — pick a bold aesthetic direction rather than generic AI defaults. |
| `vercel-react-best-practices` | Writing, reviewing or refactoring React code for performance / bundle size. |
| `vercel-composition-patterns` | Designing reusable component APIs — compound components, render props, context. |
| `web-design-guidelines` | Auditing the UI for accessibility, UX and best-practice compliance. |
| `deploy-to-vercel` | The user asks to deploy, preview, or push the site live. |

Add more with `npx skills add <owner/repo> -a claude-code`. Browse the
catalog at https://skills.sh.
