# foxypowers

Repo for a minimal OpenCode plugin that points users to a few small repo-maintenance workflows.

Use `/wt` for the plugin-assisted worktree prompt.
Use `/foxy-init` to keep `AGENTS.md` canonical while exposing `CLAUDE.md` for Claude Code compatibility.

## Install

```json
{
  "plugin": ["foxypowers@git+https://github.com/foxytanuki/foxypowers.git"]
}
```

## What this repo does

- ships a tiny plugin entrypoint
- exposes the guidance skill at `skills/git-worktree-guidance`
- exposes a small init workflow for `AGENTS.md` + `CLAUDE.md`

## What it does not do

- no wrapper scripts
- no automation or heavy hooks
- no full workflow implementation

The main guidance lives in the skill.
