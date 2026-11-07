# AGENTS.md

Retro desktop-OS style portfolio website (React) whose content comes from a JSON file, deployed to GitHub Pages.

## Commands

- Install: `npm install` (CI uses `npm install`; the Pages workflow uses `npm ci`)
- Dev server: `npm run dev`
- Build: `npm run build`; preview: `npm run preview`
- Test: `npm test` (Vitest, watch mode); one run with coverage: `npm run test -- --run --coverage`
- Lint: `npm run lint` (`npm run lint:fix` to fix)
- Format: `npm run format`; check only: `npm run format:check`
- Typecheck: `npm run typecheck`

## Conventions

- React 18, TypeScript 5, Vite 5, Tailwind 3, Vitest 0.34 with Testing Library and jsdom, npm (`package-lock.json`).
- `src/data/portfolio.json`: all portfolio content (bio, projects, links). Edit this for content changes, not the components.
- `src/components/`: desktop UI (`Window.tsx`, `Taskbar.tsx`, `DesktopIcon.tsx`, `LoadingScreen.tsx`); `windows/` has one component per window (About, Contact, Experience, Projects).
- `src/hooks/`: `use-draggable.ts`, `use-is-desktop.ts`.
- Tests live in `src/components/__tests__/` as `*.test.tsx` or `*.spec.tsx`; setup is `src/setup-tests.ts` (the README gives a different file name; trust the real path).
- Prettier: single quotes, semicolons, width 100, 2 spaces (`.prettierrc`). ESLint config: `eslint.config.js`.
- `vite.config.ts` sets `base: '/xp-portfolio/'` for GitHub Pages. Keep it in sync with the repo name.
- CI (`.github/workflows/ci.yml`) runs Prettier check, ESLint and tests with coverage on Node 20. Run the same three locally before finishing.

## Boundaries

- Always: add or update a test in `src/components/__tests__/` with every component change.
- Ask first: adding a dependency, changing `base` in `vite.config.ts`, replacing the bundled icons or images (their licensing is unclear).
- Never: commit secrets or read `.env` files.
