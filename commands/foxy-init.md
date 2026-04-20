---
description: Initialize AGENTS.md with a Claude-compatible CLAUDE.md link
---

# /foxy-init

Set up a single canonical memory file for this repo.

- Treat `AGENTS.md` as the canonical source.
- Before changing anything, inspect whether `AGENTS.md` or `CLAUDE.md` already exists.
- If `AGENTS.md` is missing, ask for the intended guidance content or draft a minimal starter based on the repo.
- If `CLAUDE.md` is missing, create `CLAUDE.md -> AGENTS.md` as a relative symlink.
- If `CLAUDE.md` is already a symlink to `AGENTS.md`, leave it as-is.
- If `CLAUDE.md` already exists as a normal file, avoid destructive replacement without user confirmation.
- When a real file already exists at `CLAUDE.md`, prefer one of these safe options:
  1. replace it with a symlink to `AGENTS.md`
  2. reduce it to a tiny compatibility file that imports `@AGENTS.md`
- Keep one canonical source per topic; do not maintain duplicated copies.
- Update related docs when this repo's setup guidance changes.
