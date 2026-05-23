# Image Generation Prompt

Use the built-in image_gen tool. Do not write an API script.

Save the resulting image exactly as:

`infographics/foxypowers/project-infographic-skill/infographic.png`

If image_gen is unavailable, explain clearly and do not create a placeholder image.

## Format

format_family: project-onepage-v1
density_preset: standard
card_count: 6
aspect_ratio: 16:9
canvas: landscape one-page infographic
layout: fixed branded bento shell

Render as a polished, readable 16:9 infographic, not a UI screenshot.

Fixed structure:

- Top bar: project wordmark `foxypowers` on the top-left, tagline on the top-right.
- Hero: large title and one-sentence takeaway.
- Modules: `standard` density, 6 content cards in a clean 3x2 grid.
- Footer: source/date and a small project mark.

Visual rules:

- consistent margins and gutters
- one primary idea per card
- short labels, large readable Japanese text
- no decorative background that competes with content
- simple consistent icons only when they clarify the card meaning
- preserve logo aspect ratio; if logo file is unavailable, use text wordmark only

## Project Theme

project: foxypowers
display_name: foxypowers
tagline: Small OpenCode workflows, clearly packaged
logo_path: none
logo_usage: top-left wordmark, preserve aspect ratio if a logo is later added, never crop, keep clear space
language: ja

palette:
  primary: "#2F5BFF"
  accent: "#FFB23F"
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

## Structured Content

Title: project-infographic skill

Takeaway: 固定フォーマットと project theme によって、同じ project の資料として認識しやすい infographic を安定生成する。

Source/date: project-infographic skill trial, 2026-05-21

Cards:

1. 固定フォーマット
   - Message: 毎回 `project-onepage-v1` を使う。
   - Evidence: 16:9、top bar、hero、6 cards、footer に固定。
   - Visual cue: locked layout grid icon

2. 認知負荷を下げる
   - Message: 読者は毎回同じ構造で情報を探せる。
   - Evidence: 6 cards に要点を整理し、1 card 1 idea にする。
   - Visual cue: simplified eye path arrow

3. project theme
   - Message: palette、typography、tone を project 単位で統一する。
   - Evidence: `.project-infographic/<project>.md` を source of truth にする。
   - Visual cue: color swatches and type sample

4. logo / wordmark
   - Message: logo があれば top-left に配置し、なければ wordmark を使う。
   - Evidence: logo は crop せず aspect ratio と clear space を守る。
   - Visual cue: top bar with wordmark placeholder

5. 再現可能な prompt
   - Message: 生成前に final prompt を `prompts/infographic.md` に保存する。
   - Evidence: prompt が残るので backend 変更や再生成がしやすい。
   - Visual cue: document file with checkmark

6. git 方針
   - Message: `.project-infographic/*.md` は基本 commit する。
   - Evidence: secrets、private local paths、大きい binary は入れず、local override だけ ignore する。
   - Visual cue: git branch with shield

## Rendering Guidance

Create a clean editorial infographic with crisp vector-like shapes, subtle shadows, generous whitespace, and strong hierarchy. Use the primary blue for headings and structure, the accent orange for highlights, white cards, and dark navy text. Keep all Japanese text large enough to read in a 16:9 slide.
