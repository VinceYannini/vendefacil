# Project Log and Technical Snapshot

Last updated: 2026-03-30
Project: vendefacil
Path: /home/vwolf/Documents/888Smokers-Automata/CodeX/AdminApp/vendefacil

## 1) Current Structure (Relevant)

### Root
- .env.example
- eslint.config.js
- index.html
- jsconfig.json
- package.json
- README.md
- vite.config.js
- public/
- src/

### public/
- public/favicon.svg
- public/icons.svg

### src/
- src/App.css
- src/App.jsx
- src/index.css
- src/main.jsx
- src/assets/hero.png
- src/assets/react.svg
- src/assets/vite.svg
- src/components/ClickCounter.jsx
- src/components/DocsLinks.jsx
- src/components/HeroScene.jsx
- src/components/SocialLinks.jsx
- src/pages/HomePage.jsx
- src/hooks/.gitkeep
- src/services/.gitkeep
- src/styles/.gitkeep
- src/utils/.gitkeep

## 2) Stack and Runtime Data

- Framework: React 19
- Build tool: Vite 8
- Language: JavaScript + JSX
- Linting: ESLint 9
- Module system: ESM

## 3) Scripts and Commands

From package.json:
- npm run dev
- npm run build
- npm run lint
- npm run preview

## 4) Relevant Configuration

### Vite
- File: vite.config.js
- Alias active:
  - @ -> ./src

### JS Path Hints
- File: jsconfig.json
- Paths active:
  - @/* -> src/*

### ESLint
- File: eslint.config.js
- Base config:
  - @eslint/js recommended
  - react-hooks recommended
  - react-refresh vite rules
- Custom rules active:
  - no-unused-vars
  - no-console (warn, allows warn/error)
  - eqeqeq
  - prefer-const

## 5) Environment Variables and Secrets Policy

### Declared environment variables
From .env.example:
- VITE_APP_NAME
- VITE_APP_ENV
- VITE_SUPABASE_URL (empty placeholder)
- VITE_SUPABASE_ANON_KEY (empty placeholder)

### Credentials state
- No real credentials were found in tracked source files.
- Placeholders exist only in .env.example.

### Security policy for this repo
- Do not commit a real .env file.
- Keep real keys only in local .env or secure secret manager.
- Keep .env.example as contract without sensitive values.
- Rotate credentials if any secret is accidentally committed.

## 6) Change Log (What has been done)

- Removed unused runtime dependencies:
  - @supabase/supabase-js
  - lucide-react
  - react-router-dom
  - recharts
- Refactored UI from monolith App to page/component composition.
- Added base folders for scale:
  - src/components
  - src/pages
  - src/hooks
  - src/services
  - src/utils
  - src/styles
- Added env contract file: .env.example
- Added import alias support (@) in Vite and jsconfig paths.
- Replaced template README with project-oriented documentation.
- Baseline verification completed:
  - lint pass
  - build pass
- Implemented public/admin split in frontend:
  - Public landing in `/`
  - Admin access in `/admin`
  - Protected internal view in `/admin/panel`
- Added routing and route guard with React Router.
- Added bootstrap admin session flow (email allowlist + access code via env).

## 7) Pending Technical Risks (Current)

- No automated tests yet.
- Routing not yet enabled for multi-page flows.
- No real backend integration active.
- Type safety not implemented (no TypeScript yet).
