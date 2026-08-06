# Roadmap

A note on how this project is structured: Button and Modal are built out
fully as reference implementations — study these two closely, since they
demonstrate the patterns (accessible naming, focus management, keyboard
handling, axe testing) you'll reuse everywhere else. Everything below this
point is intentionally left for you to build yourself. A portfolio you can't
explain in an interview is worse than no portfolio — the goal isn't a
finished library, it's you being able to talk through every line of it.

## Phase 1 — Core components (do these next, in this order)

- [ ] **Accordion** — the natural next step after Modal, since it reuses
  keyboard-handling patterns (Arrow keys to move between headers, Enter/Space
  to toggle) plus `aria-expanded` / `aria-controls`. Folder is already
  scaffolded at `src/components/Accordion/`.
- [ ] **FormField** — a labeled input wrapper handling `aria-describedby`
  for error/hint text, and `aria-invalid` on validation failure. This is the
  single most common real-world accessibility bug (unlabeled or
  mislabeled form fields) — building it well is a strong signal.
- [ ] **Tabs** — `role="tablist"`, roving `tabindex`, Arrow-key navigation
  between tabs. Good third component; reinforces the roving-tabindex pattern
  which shows up constantly in accessible widget design.

For each: write the component, write the behavioral test (keyboard first,
click second), write the `jest-axe` test, write the Storybook story. Same
four-step pattern as Button and Modal — repetition here is the point.

## Phase 2 — Polish the library itself

- [ ] Set up the Storybook `a11y` addon so violations show up visually
  (`npm install --save-dev @storybook/addon-a11y`, add to `.storybook/main.ts`)
- [ ] Add a GitHub Actions workflow that runs `npm test` on every push —
  a green CI badge on your README is a strong, fast trust signal
- [ ] Deploy Storybook publicly (Chromatic or GitHub Pages) so recruiters can
  click through live components without cloning the repo

## Phase 3 — Second portfolio project

Once the library has 4-5 solid components: build a small real page that
*uses* this library — for example, an accessible job listing / application
page (ties naturally to your PeopleScout/recruitment-platform background).
This proves you can ship a real screen, not just isolated components.

## Phase 4 — Write it up

A short blog post or LinkedIn article — "What I learned building an
accessible component library while learning React" — turns this from a repo
into a story. This is often what actually gets noticed, more than the code
itself.
