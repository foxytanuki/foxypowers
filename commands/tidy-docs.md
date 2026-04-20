---
description: Audit and tidy repository documentation
---

# /tidy-docs

Audit and tidy repository documentation.

Use this command when docs need cleanup, reorganization, deduplication, or behavior changes may have made docs stale.

## Responsibility rules

- `README.md`: short overview and entrypoints only.
- `commands/*.md`: canonical guidance for each command workflow.
- `AGENTS.md`: maintainer rules for agents.
- plugin code: minimal nudges only, not the source of truth for docs.

## Cleanup checklist

- Identify the canonical source for each affected topic.
- Delete duplicate or stale text instead of syncing it.
- Keep wording consistent across affected docs.
- Keep `README.md` short.
- When behavior changes, update related docs in the same pass.

## Done when

- No topic has multiple conflicting sources of truth.
- Affected docs match current behavior.
- `README.md` stays short.
- Detailed workflow guidance lives in the relevant command file.
