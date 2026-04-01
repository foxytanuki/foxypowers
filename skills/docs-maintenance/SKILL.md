---
name: docs-maintenance
description: Keep repository docs clean, current, deduplicated, and properly scoped.
---

# docs maintenance

Use this skill when repository documentation needs cleanup or reorganization.

## Use this skill when

- the user asks to tidy or reorganize docs
- behavior changed and related docs may now be stale
- similar guidance appears in multiple places

## Responsibility rules

- `README.md`: short overview and entrypoints only
- `commands/*.md`: thin manual entrypoints only
- `skills/*/SKILL.md`: canonical guidance for a topic
- `AGENTS.md`: maintainer rules for agents
- plugin code: minimal nudges only, not the source of truth for docs

## Cleanup checklist

- identify the canonical source for each affected topic
- delete duplicate or stale text instead of syncing it
- move detailed guidance out of commands and `README.md` when needed
- keep wording consistent across affected docs

## Done when

- no topic has multiple conflicting sources of truth
- affected docs match current behavior
- `README.md` stays short
- commands are concise entrypoints
- detailed guidance lives in the appropriate skill
