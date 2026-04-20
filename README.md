# foxypowers

Repo for a minimal OpenCode plugin that points users to a few small repo-maintenance workflows.

Use `/wt` for worktree setup guidance.
Use `/foxy-init` to keep `AGENTS.md` canonical while exposing `CLAUDE.md` for Claude Code compatibility.
Use `/tidy-docs` to clean up docs and remove duplicate guidance.

## Install

```json
{
  "plugin": ["foxypowers@git+https://github.com/foxytanuki/foxypowers.git"]
}
```

For local plugin usage, point OpenCode at `src/index.js` and place or symlink `commands/*.md` into your OpenCode commands directory.

## What this repo does

- ships a tiny plugin entrypoint
- exposes small repo-maintenance commands
- exposes a small init workflow for `AGENTS.md` + `CLAUDE.md`

## What it does not do

- no wrapper scripts
- no automation or heavy hooks
- no full workflow implementation
