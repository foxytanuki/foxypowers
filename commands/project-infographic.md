---
description: Create a fixed-format project-branded infographic
---

# /project-infographic

Create a fixed-format, project-branded infographic.

Use this command when you want stable infographic output with a repeated layout, theme, and logo treatment across the same project.

## Inputs

Accepted forms:

```txt
/project-infographic --project <name> <source-file>
/project-infographic --project <name> <pasted content>
/project-infographic <source-file>
```

If `--project` is omitted, infer it from the repo name or ask one short question.

## Canonical workflow

Use these fixed defaults:

- Format family: `project-onepage-v1`
- Aspect: `16:9`
- Layout: one-page branded bento shell
- Density: `brief` 3 cards, `standard` 6 cards, `dense` 9 cards, or `appendix` 12 cards
- Theme source: `.project-infographic/<project>.md`, then `.project-infographic/default.md`
- Output: `infographics/<project>/<topic-slug>/`

Workflow:

1. Resolve project name from `--project`, repo name, or one short question.
2. Copy the source to `source.md` in the output directory.
3. Resolve or create the project theme file.
4. Write `theme.md` beside the output as the exact theme snapshot used.
5. Choose a density preset from source complexity and write `structured-content.md` with matching card count.
6. Write the full final prompt to `prompts/infographic.md` before generation.
7. Generate `infographic.png` with Codex CLI built-in `image_gen`; do not write an API script.
8. Verify the image file and report whether `.codex` was avoided.

## Theme setup

If the project theme file does not exist, create `.project-infographic/<project>.md` using the minimal fields requested by the skill:

- project display name
- logo path, or no logo
- primary color
- accent color
- tone

Do not block on a logo; use a text wordmark when no logo exists.

Theme template:

```md
# Project Infographic Theme

project: <project>
display_name: <Display Name>
tagline:
logo_path:
logo_usage: top-left, preserve aspect ratio, never crop, keep clear space
language: ja

palette:
  primary: "#1F4FFF"
  accent: "#FFB000"
  background: "#F7F8FB"
  surface: "#FFFFFF"
  text: "#172033"

typography:
  heading: bold geometric sans-serif
  body: readable sans-serif

tone: clear, practical, project-consistent
avoid:
  - busy backgrounds
  - inconsistent icon styles
  - tiny unreadable text
```

## Prompt requirements

The final prompt must include:

- `format_id: project-onepage-v1`
- 16:9 one-page bento layout with top bar, hero, density preset cards, and footer
- selected density preset and card count
- complete project theme snapshot
- logo handling rule: preserve aspect ratio; use text wordmark if unavailable
- output path
- “Use the built-in image_gen tool. Do not write an API script.”
- “Render as a polished, readable 16:9 infographic, not a UI screenshot.”

## Done when

- `source.md`, `structured-content.md`, `theme.md`, `prompts/infographic.md`, and `infographic.png` exist under the output directory.
- The final prompt was written before image generation.
- The image was generated with Codex CLI built-in `image_gen`, not an API script.
- Verification result is reported.
