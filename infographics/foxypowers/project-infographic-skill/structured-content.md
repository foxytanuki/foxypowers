# Structured Content

## Project
- Name: foxypowers
- Theme source: `.project-infographic/foxypowers.md`
- Logo: no logo file; use text wordmark `foxypowers`

## Infographic
- Format family: project-onepage-v1
- Density preset: standard
- Card count: 6
- Title: project-infographic skill
- Takeaway: 固定フォーマットと project theme によって、同じ project の資料として認識しやすい infographic を安定生成する。
- Source/date: project-infographic skill trial, 2026-05-21

## Cards
1. Title: 固定フォーマット
   - Message: 毎回 `project-onepage-v1` を使う。
   - Evidence: 16:9、top bar、hero、6 cards、footer に固定。
   - Visual cue: locked layout grid icon
2. Title: 認知負荷を下げる
   - Message: 読者は毎回同じ構造で情報を探せる。
   - Evidence: 6 cards に要点を整理し、1 card 1 idea にする。
   - Visual cue: simplified eye path arrow
3. Title: project theme
   - Message: palette、typography、tone を project 単位で統一する。
   - Evidence: `.project-infographic/<project>.md` を source of truth にする。
   - Visual cue: color swatches and type sample
4. Title: logo / wordmark
   - Message: logo があれば top-left に配置し、なければ wordmark を使う。
   - Evidence: logo は crop せず aspect ratio と clear space を守る。
   - Visual cue: top bar with wordmark placeholder
5. Title: 再現可能な prompt
   - Message: 生成前に final prompt を `prompts/infographic.md` に保存する。
   - Evidence: prompt が残るので backend 変更や再生成がしやすい。
   - Visual cue: document file with checkmark
6. Title: git 方針
   - Message: `.project-infographic/*.md` は基本 commit する。
   - Evidence: secrets、private local paths、大きい binary は入れず、local override だけ ignore する。
   - Visual cue: git branch with shield
