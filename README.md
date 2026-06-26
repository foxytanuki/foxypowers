# foxypowers

A minimal OpenCode plugin that ships a handful of small repo-maintenance commands and skills.

## Commands

| Command | What it does |
| --- | --- |
| `/wt` | Worktree setup guidance. |
| `/wt-clean` | Remove finished worktrees and unused branches safely. |
| `/foxy-init` | Keep `AGENTS.md` canonical while exposing `CLAUDE.md` for Claude Code. |
| `/tidy-docs` | Clean up docs and remove duplicate guidance. |
| `/worklog` | Create or refresh durable task worklogs under `docs/worklogs/`. |
| `/project-infographic` | Generate fixed-format, project-branded infographics. |

## Skills

| Skill | What it does |
| --- | --- |
| `codex-image-gen` | Codex CLI built-in `image_gen` workflows. |
| `project-infographic` | Reusable infographic theme/logo workflows. |
| `handover` | Write concise continuation notes to `HANDOVER.md`. |

## Install

Add the plugin to your OpenCode config:

```json
{
  "plugin": ["foxypowers@latest"]
}
```

The plugin syncs `commands/*.md` into the global OpenCode commands directory and `skills/*` into the global OpenCode skills directory when it loads. The `postinstall` step also performs the same copy for initial installs.

### Local development

Symlink `commands/*.md` into your OpenCode commands directory and symlink `src/index.js` into your OpenCode plugins directory.

## Scope

**Ships:**
- A tiny plugin entrypoint
- Small repo-maintenance commands
- An init workflow for `AGENTS.md` + `CLAUDE.md`
- A fixed-format project infographic workflow
- The `codex-image-gen` and `handover` skills

**Does not ship:**
- Wrapper scripts
- Runtime automation or heavy hooks
- Full workflow implementations
