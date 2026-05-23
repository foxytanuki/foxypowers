---
name: project-infographic
description: Create fixed-format, project-branded infographics with consistent layout, theme, and logo usage.
---

# Project Infographic Skill

Use this skill when the user wants infographic output that should feel like the same project's documents every time.

Typical triggers:

- “infographic を固定フォーマットで出したい”
- “project ごとに theme/logo を統一したい”
- “同じ project の資料に見える infographic を作って”
- “baoyu-infographic ベースで安定出力したい”

## Goal

Generate a reproducible image prompt and image for a fixed infographic format family:

1. Keep the information design predictable to lower cognitive load.
2. Apply the selected project's theme and logo consistently.
3. Save the final prompt before image generation.
4. Use Codex CLI built-in `image_gen`; do not write image API scripts.

## Fixed format family

Default to this format family unless the user explicitly asks for another preset. Keep the shell stable, but choose the card density that fits the source.

```yaml
format_family: project-onepage-v1
aspect_ratio: 16:9
canvas: landscape one-page infographic
layout: fixed branded bento shell
structure:
  - top_bar: project logo, project name, optional tagline
  - hero: title, one-sentence takeaway
  - modules: density preset cards
  - footer: source/date, small project mark, short disclaimer if needed
visual_rules:
  - consistent margins and gutters
  - one primary idea per card
  - short labels, large readable text
  - no decorative background that competes with content
  - use icons only when they clarify the card meaning
```

### Density presets

Choose exactly one density preset per output. The preset controls card count and grid, while the top bar, hero, footer, theme, margins, and reading order stay consistent.

| Preset | Cards | Grid | Use when |
|--------|-------|------|----------|
| `brief` | 3 | 3x1 | One message, simple announcement, executive summary |
| `standard` | 6 | 3x2 | Default overview, balanced concept explanation |
| `dense` | 9 | 3x3 | Multi-part guide, feature map, comparison-heavy source |
| `appendix` | 12 | 4x3 | Reference sheet or checklist; use only when readability remains acceptable |

Rules:

- Prefer `standard` when unsure.
- Use `brief` rather than padding weak content into 6 cards.
- Use `dense` rather than over-compressing genuinely rich content into 6 cards.
- Use `appendix` only for documentation/reference material, not persuasive summaries.
- Never invent facts to fill cards.
- If the source exceeds `dense`, group related points or recommend splitting into multiple infographics.

## Project theme file

Look for the first existing theme file in this order:

1. `.project-infographic/<project>.md`
2. `.project-infographic/default.md`
3. `.baoyu-skills/project-infographic/<project>.md`
4. `.baoyu-skills/project-infographic/default.md`

If no theme exists, ask for only the missing essentials: project name, logo path if any, primary color, accent color, and tone. Then create `.project-infographic/<project>.md` before generating the prompt.

Version-control guidance:

- Do commit `.project-infographic/*.md` when it contains only brand/theme defaults. It is the project-level source of truth for consistent output.
- Do not put secrets, unreleased private messaging, licensed font files, or large binary logo assets directly in this directory.
- If a theme needs private local paths, keep those in a local override file and ignore only that override, not the whole `.project-infographic` directory.
- Generated outputs under `infographics/` are project-dependent: commit them when they are documentation assets; ignore them when they are local drafts.

Theme file template:

```md
# Project Infographic Theme

project: example-project
display_name: Example Project
tagline: Optional short tagline
logo_path: assets/logo.png
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

tone: clear, practical, maintainer-focused
avoid:
  - busy backgrounds
  - inconsistent icon styles
  - tiny unreadable text
```

## Output structure

```txt
infographics/<project>/<topic-slug>/
├── source.md
├── structured-content.md
├── theme.md
├── prompts/infographic.md
└── infographic.png
```

Slug: 2-5 words in kebab-case. If the directory exists, append `-YYYYMMDD-HHMMSS`.

## Workflow

### 1. Resolve project and source

- Project comes from `--project <name>`, user text, current repo name, or a brief question.
- Source comes from a provided file path or pasted content.
- Copy source content to `source.md`.
- Strip credentials, API keys, tokens, and secrets before writing derived files.

### 2. Resolve theme

- Read the project theme file.
- Verify `logo_path` exists when set.
- Copy the resolved theme content to `theme.md` in the output directory.
- If no logo exists, continue with a text wordmark from `display_name`.

### 3. Choose density and structure content

Select a density preset based on source complexity:

- `brief`: 1-3 natural sections
- `standard`: 4-6 natural sections
- `dense`: 7-9 natural sections
- `appendix`: 10-12 checklist/reference items

If the source has more than 12 natural sections, either group them into `dense` or ask whether to split into multiple outputs.

Write `structured-content.md` with this exact shape:

```md
# Structured Content

## Project
- Name:
- Theme source:
- Logo:

## Infographic
- Format family:
- Density preset:
- Card count:
- Title:
- Takeaway:
- Source/date:

## Cards
1. Title:
   - Message:
   - Evidence:
   - Visual cue:
...
```

Rules:

- Preserve claims and numbers faithfully.
- Prefer the user's/source language unless the theme specifies `language`.
- Do not add facts not present in the source.
- Keep each card concise enough to be legible in a 16:9 image.
- Card count must match the selected density preset.

### 4. Write final prompt

Write the full final prompt to `prompts/infographic.md` before invoking any image backend.

The prompt must include:

- `format_id: project-onepage-v1`
- selected density preset and card count
- fixed structure from this skill
- complete project theme
- `structured-content.md` content
- output path
- instruction: “Use the built-in image_gen tool. Do not write an API script.”
- instruction: “Render as a polished, readable 16:9 infographic, not a UI screenshot.”
- instruction: “Preserve logo aspect ratio; if logo file is unavailable, use text wordmark only.”

### 5. Generate image

Use Codex CLI with ephemeral state:

```sh
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  "Read <output-dir>/prompts/infographic.md. Use the built-in image_gen tool. Do not write an API script. Save the resulting image exactly as <output-dir>/infographic.png. If image_gen is unavailable, explain clearly and do not create a placeholder image."
```

If a usable logo/reference image exists and Codex supports image input, attach it:

```sh
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  --image <logo-path> \
  "Read <output-dir>/prompts/infographic.md. Use the attached logo only as brand reference. Use the built-in image_gen tool. Do not write an API script. Save the resulting image exactly as <output-dir>/infographic.png."
```

### 6. Verify

Run:

```sh
file <output-dir>/infographic.png
test ! -e .codex
```

If `.codex` exists, report it and do not delete it without approval.

## Done when

- The source, structured content, theme copy, final prompt, and image are in the output directory.
- The image uses the fixed `project-onepage-v1` format.
- Theme colors, typography intent, and logo/wordmark placement match the project theme.
- The final response reports project, output path, prompt path, logo handling, and verification result.
