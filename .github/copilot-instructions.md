---
name: Workspace Instructions
description: High-level guidance for working on the Bingo Mixer repo, including dev commands, repo structure, and existing AI customization assets.
---

This repository is a React + Vite Bingo Mixer app with a built-in workshop for context engineering and agent-driven development.

## Quick start
- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Verify the build: `npm run build`
- Run tests: `npm run test`
- Run lint: `npm run lint`

## Key files
- `README.md` — repo overview and lab guide links
- `workshop/` — onboarding, setup, design, and multi-agent workshop content
- `src/App.tsx` — app entry point
- `src/components/` — main UI components
- `src/hooks/useBingoGame.ts` — game state management
- `src/utils/bingoLogic.ts` — bingo rules and helper logic
- `src/data/questions.ts` — bingo prompt data

## Existing customizations
- `.github/instructions/frontend-design.instructions.md` — use for UI and design requests
- `.github/instructions/tailwind-4.instructions.md` — use for Tailwind CSS v4 styling
- `.github/agents/tdd.agent.md` and related `tdd-*` agents — use for feature implementation via TDD
- `.github/agents/quiz-master.agent.md` — use for generating icebreaker and bingo question content

## What to do
- Prefer the existing workshop and instruction files over adding redundant guidance
- Keep responses focused on the current request and avoid large architecture rewrites
- Use the app’s existing React + Tailwind/Vite conventions when adding or modifying UI
- When asked for styling, follow Tailwind v4 idioms and the repo’s CSS-first setup

## What to avoid
- Do not introduce unrelated frameworks or unnecessary build tools
- Do not remove or bypass the repo’s current Vite + React + Tailwind setup
- Do not duplicate workshop content; link to `workshop/` or `README.md` instead

## Notes
- This repo includes a `.devcontainer/` for Codespaces and local development containers
- Pages deployment is configured from `main`

For more details, consult `README.md` and `workshop/01-setup.md`.
