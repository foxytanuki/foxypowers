# foxypowers

Repo for a minimal OpenCode plugin that points users to a few small repo-maintenance workflows.

Use `/wt` for worktree setup guidance.
Use `/wt-clean` to remove finished worktrees and unused branches safely.
Use `/foxy-init` to keep `AGENTS.md` canonical while exposing `CLAUDE.md` for Claude Code compatibility.
Use `/tidy-docs` to clean up docs and remove duplicate guidance.
Use `/project-infographic` for fixed-format, project-branded infographics.
Use the `codex-image-gen` skill for Codex CLI built-in `image_gen` workflows.
Use the `project-infographic` skill for reusable infographic theme/logo workflows.
Use the `handover` skill to write concise continuation notes to `HANDOVER.md`.

## Install

Add the plugin package to OpenCode config:

```json
{
  "plugin": ["foxypowers@latest"]
}
```

The package install copies `commands/*.md` into the global OpenCode commands directory and `skills/*` into the global OpenCode skills directory.

For local plugin development, symlink `commands/*.md` into your OpenCode commands directory and symlink `src/index.js` into your OpenCode plugins directory.

## What this repo does

- ships a tiny plugin entrypoint
- exposes small repo-maintenance commands
- exposes a small init workflow for `AGENTS.md` + `CLAUDE.md`
- exposes a fixed-format project infographic workflow
- exposes the `codex-image-gen` skill
- exposes the `handover` skill

## What it does not do

- no wrapper scripts
- no runtime automation or heavy hooks
- no full workflow implementation
