---
name: claude-compat-init
description: Initialize AGENTS.md as the canonical memory file and expose it to Claude Code via CLAUDE.md.
---

# claude compat init

Set up a single canonical memory file for the repo.

- Treat `AGENTS.md` as the canonical source.
- Prefer `CLAUDE.md` as a relative symlink to `AGENTS.md`.
- Keep one canonical source per topic; do not maintain duplicated copies.
- Before changing anything, inspect whether `AGENTS.md` or `CLAUDE.md` already exists.
- If `AGENTS.md` is missing, ask for the intended guidance content or draft a minimal starter based on the repo.
- If `CLAUDE.md` is missing, create `CLAUDE.md -> AGENTS.md`.
- If `CLAUDE.md` is already a symlink to `AGENTS.md`, leave it as-is.
- If `CLAUDE.md` already exists as a normal file, avoid destructive replacement without user confirmation.
- When a real file already exists at `CLAUDE.md`, prefer proposing one of these safe options:
  1. replace it with a symlink to `AGENTS.md`
  2. reduce it to a tiny compatibility file that imports `@AGENTS.md`
- Update related docs when this repo's setup guidance changes.
