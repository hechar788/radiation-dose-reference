# Reflection

## Trade offs made

- **Static JSON instead of a backend.** The dataset is 26 rows that rarely change. I transcribed the PDF into one typed JSON file and shipped it with the bundle. That meant zero infrastructure, and the time went into presentation, which is what the brief weights most.
- **One table per body area.** A single combined table would be easier to build and sort globally. But the per area tables mirror the source document, so a patient holding the guide can find the same section in the app. The cost is more scrolling when comparing across areas. The shared search and aligned columns soften that.
- **Hover flip cards for the explainer section.** They make the intro content inviting instead of a wall of text. Hover is a weaker interaction on touch screens though, where it leans on tap to hover emulation. In future the cards can drop the flip on smaller screens and show the title and content together on one static card.
- **Relative dose badges.** Minimal, Low, Moderate and Higher give a general reader something to scan. The risk is that someone reads them as clinical ratings, so they are labelled as relative to this dataset only.
- **Conventions up front.** Every component keeps its strings and styles in files beside it. That is heavier than an app this size strictly needs. But it matches how I structure larger codebases, and it made each component self contained and quick to change.

## How I used AI tooling

I used Claude Code as the main implementation tool and worked through the build step by step: tooling and scaffolding first, then the UI primitives, the dataset, the app shell, the explainer cards, the tables, and finally the documentation and deployment. At each step I made the architecture and product calls, like the TanStack stack, shadcn/ui, the file structure, and what each section should do. The agent wrote the code. That covered extracting the PDF tables into JSON, scaffolding the project, building the components, and writing the Jest tests.

Before moving on I reviewed the diffs in GitHub Desktop and checked the rendered result in the browser. Where the review only called for small tweaks, like copy or styling nudges, I made the changes myself. Anything larger I fed back to the agent with direction on what to change. The real improvements came from that loop, not the first pass. The table columns originally sized themselves to their content and drifted out of line between tables. The explainer cards carried step numbers that did not fit what they actually were. Some copy was bloated. I also had the agent restructure away from a pages directory when I noticed it did not match TanStack Router conventions, and rewrite the git history so each test sits in the same commit as the code it covers.

## Assumptions

- Readers are patients without a technical background, so plain language, comparisons to everyday background radiation, and visual cues matter more than data density.
- The background radiation column is a rendering of the dose itself, so it sorts by the mSv value instead of parsing strings like "2.6 years".
- English only is fine for now. Strings already live in their own files, so translation becomes a loading problem, not a rewrite.

## What worked well

Getting the dataset into a typed JSON file first paid off. The tables, badges, search and tests all consumed one well shaped source of truth. Headless TanStack Table with owned shadcn/ui primitives meant I could change table behaviour and table appearance independently. And the review loop was fast. The column alignment problem went from noticed to fixed and committed in minutes.

## What I would improve or work on next

- **Detail pages for each procedure** using the router that is already in place, with room for longer plain language explanations.
- **A visual dose comparison**, such as a horizontal bar for each procedure scaled against background radiation. That communicates magnitude better than numbers alone.
- **Touch and screen reader passes.** The flip cards should become static cards on touch devices, with title and content shown together, and how the content gets announced needs a proper audit.

*This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.*
