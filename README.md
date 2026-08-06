# a11y-component-library

An accessible, WCAG 2.1 AA-focused React component library, built with TypeScript.

Built by Anjali Bhand — 15+ years in frontend development with a specialization
in web accessibility (WCAG 2.0/2.1, ARIA, screen reader testing), currently
applying that background to modern React + TypeScript.

## Why this project exists

Most React portfolios are todo apps. This one is different on purpose: every
component here is built the way a senior developer with real accessibility
experience would build it — not just visually correct, but usable with a
keyboard alone, correctly announced by screen readers, and automatically
tested for WCAG violations on every commit.

## What's inside

- **Button** — native `<button>` semantics, `aria-busy` loading state,
  enforced accessible naming for icon-only buttons.
- **Modal** — full focus trap, Escape-to-close, and focus restoration to the
  triggering element on close (the part most modal implementations get wrong).
- More components are in progress — see `ROADMAP.md`.

## Accessibility testing approach

Every component has:
1. A behavioral test suite (React Testing Library) covering keyboard
   interaction, not just click handlers.
2. An automated `jest-axe` check (`expect(results).toHaveNoViolations()`)
   that fails the build if a component introduces a detectable WCAG violation.
3. A Storybook story with the accessibility addon enabled, so violations are
   also visible visually during development, not just in CI.

## Tech stack

React 18 · TypeScript · Vite · Jest + React Testing Library · jest-axe ·
Storybook

## Getting started

```bash
npm install
npm run dev          # local dev server
npm test              # run the test suite
npm run storybook     # browse components interactively
```

## Status

Actively in progress while upskilling in React/TypeScript. See `ROADMAP.md`
for what's built and what's next.
