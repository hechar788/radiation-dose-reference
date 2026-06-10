# Radiation Dose Reference Guide

> **Disclaimer:** This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.

## Project Overview

A small patient-facing web application that helps a non-technical user understand radiation dose by imaging procedure. It presents the supplied Radiation Dose Reference Guide dataset in two ways:

1. **What happens when you have a scan?** A row of step-by-step cards explaining the journey from referral to dose comparison. Hovering (or keyboard-focusing) a card flips it to reveal a plain-language explanation of that step. The explanations are drawn from the introduction of the reference guide.
2. **Explore doses by body area.** One sortable table per body area from the guide (Abdominal Region, Bone, Central Nervous System, Chest, Dental, Heart, Men's Imaging, Nuclear Medicine, Women's Imaging). Each row shows the procedure, its Approximate Effective Dose (A.E.D.) in millisieverts with a relative dose badge, and the comparable period of natural background radiation. A search box filters procedures across every table at once.

The full dataset from the PDF is consolidated into a single typed JSON file (`src/data/radiation-dose-reference.json`) so all information is accessible through direct viewing, sorting, and search.

## Technology Choices

| Technology | Why |
| --- | --- |
| [Vite](https://vite.dev) + React 19 + TypeScript | Fast, zero-config frontend tooling with type safety. |
| [TanStack Router](https://tanstack.com/router) | File-based routing (`src/routes`). The app is a single route today, but the router gives a clear place for future pages (e.g. per-procedure detail views). |
| [TanStack Table](https://tanstack.com/table) | Headless table logic (sorting, column definitions) without being locked into a component library's markup. |
| [shadcn/ui](https://ui.shadcn.com) + Tailwind CSS v4 | Accessible, copy-in component primitives (Card, Table, Input, Badge, Button) that stay fully owned and editable in `src/components/ui`. |
| [Lucide](https://lucide.dev) | Icon set used by shadcn/ui. |
| [react-intl](https://formatjs.github.io/docs/react-intl/) | All user-facing strings live in co-located `*.i18n.ts` files as message descriptors, so the app is translation-ready. |
| [tss-react](https://tss-react.dev) | Component-scoped styles in co-located `*.styles.ts` files consumed through a `useStyles` hook. |

### Structure

```
src/
  components/
    disclaimer-banner/      # Required assessment disclaimer, shown below the header
    dose-guide/             # The main feature: hero, process steps, dose tables
      process-steps/        # Flip-card explainer section
      dose-tables/          # Search + one TanStack Table per body area
    flip-card/              # Generic hover/focus 3D flip card
    layout/                 # Header, footer, page chrome
    ui/                     # shadcn/ui primitives
  data/                     # Dataset JSON + types
  routes/                   # TanStack Router file-based routes
  utils/                    # Dose level banding helper
```

Each component folder co-locates its implementation (`Component.tsx`), styles (`Component.styles.ts`), and strings (`Component.i18n.ts`).

## Installation

Prerequisites: Node.js 20+ and npm.

```bash
npm install
```

## Running Locally

```bash
npm run dev      # start the dev server on http://localhost:5173
npm run build    # type-check and produce a production build in dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
npm run test     # run the Jest test suite
```

## Assumptions and Limitations

- **Dataset is static.** The PDF tables were transcribed into JSON. The dataset is small and static, so shipping it with the bundle is the simplest option and is the reason for no complexity added such as client-side caching, a backend, or an API layer.
- **Dose level badges are not clinical ratings.** The Minimal / Low / Moderate / Higher badges are relative bands within this dataset only, added to help a non-technical reader scan the tables. Thresholds live in `src/utils/dose-level.ts`.
- **English only for now.** Strings are externalised into `*.i18n.ts` files but no translations are loaded.
