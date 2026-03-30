# Project Todo and Checkpoints

Last updated: 2026-03-30

## Completed Checkpoints

- [x] Baseline health validated (lint and production build passing).
- [x] Initial dependency cleanup completed (removed unused runtime libraries).
- [x] App architecture moved from one large component to modular composition.
- [x] Scalable folder layout created for future growth.
- [x] Vite alias configured (@ -> src).
- [x] jsconfig paths configured for editor support.
- [x] Environment contract file created (.env.example).
- [x] README updated with real project context.
- [x] ESLint rules strengthened with practical safeguards.
- [x] Public landing implemented as business-facing front page.
- [x] Admin module split implemented with protected internal route.
- [x] Initial admin access bootstrap via env-configured allowlist/code.

## In Progress Checkpoints

- [ ] Move admin access from bootstrap frontend to real backend auth (Supabase/Auth provider + roles).

## Pending Checkpoints (Recommended Next)

### Phase 3: Quality
- [ ] Install and configure Vitest.
- [ ] Install and configure React Testing Library.
- [ ] Add at least 3 smoke tests:
  - [ ] App shell render.
  - [ ] Counter increments on click.
  - [ ] Home page sections render expected links/titles.
- [ ] Add test scripts in package.json.

### Phase 4: MVP Client Flow
- [ ] Select and document one high-value flow (single source of truth in docs).
- [ ] Implement minimal routing and split views by purpose.
- [ ] Create first service module for external data.
- [ ] Add loading and error states for data-dependent UI.
- [ ] Validate UX in mobile and desktop.

### Phase 5: Hardening and Delivery
- [ ] Add CI validation pipeline (lint + test + build).
- [ ] Add pre-merge checklist for quality gate.
- [ ] Add production env setup notes and deployment target.
- [ ] Define versioning and release notes format.

## Operational Checklist Before Each Push

- [ ] npm run lint
- [ ] npm run build
- [ ] npm run test (once tests are enabled)
- [ ] Manual sanity check of primary UI path

## Notes

- This checklist intentionally prioritizes speed to usable MVP with minimal technical debt.
- Keep scope strict: one client flow first, then iterate.
