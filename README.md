# foxypowers

Repo for a minimal OpenCode plugin that points users to git-worktree guidance.

Use `/wt` for the plugin-assisted worktree prompt.

## Install

```json
{
  "plugin": ["foxypowers@git+https://github.com/foxytanuki/foxypowers.git"]
}
```

## What this repo does

- ships a tiny plugin entrypoint
- exposes the guidance skill at `skills/git-worktree-guidance`

## What it does not do

- no wrapper scripts
- no automation or heavy hooks
- no full workflow implementation

The main guidance lives in the skill.
