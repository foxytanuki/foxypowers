---
name: handover
description: Create or refresh HANDOVER.md handoff notes for a repository. Use when the user asks for handover, 引き継ぎ, 引継ぎ, session summary, or next-agent context.
---

# Handover Skill

Use this skill when the user wants durable handoff notes written to `HANDOVER.md` for another agent, maintainer, or future session.

Typical triggers:

- “handover を作って”
- “引き継ぎ資料を書いて”
- “HANDOVER.md にまとめて”
- “次の agent 向けに状況整理して”
- “session summary を repo に残して”

## Goal

Create or refresh a repository-root `HANDOVER.md` that gives the next person enough context to continue safely without rereading the entire session.

## Rules

- Write the output to `HANDOVER.md` at the repository root unless the user specifies another path.
- Keep it factual and concise.
- Prefer concrete paths, commands, commit hashes, PR/issue links, and verification results over vague summaries.
- Separate completed work from pending work.
- Include blockers, assumptions, and risks when relevant.
- Do not include secrets, tokens, private credentials, or sensitive personal data.
- Do not invent test results. If verification was not run, say so.
- If `HANDOVER.md` already exists, refresh it instead of appending stale duplicate sections.
- If the working tree has uncommitted changes, mention the relevant files and their intent.

## Recommended workflow

1. Inspect the current repository state:
   - `git status --short --branch`
   - recent commits if useful: `git log --oneline -5`
   - relevant diffs when there are uncommitted changes
2. Review the current conversation/task context.
3. Write `HANDOVER.md` with the template below.
4. Verify the file is readable and contains no obvious secrets.

## Template

```markdown
# Handover

## Current status

- <One to three bullets describing where things stand now.>

## Completed

- <What was done, with file paths and commit/PR links if available.>

## In progress / pending

- <Remaining tasks or decisions. Use “None known” if empty.>

## Important files

- `<path>` — <why it matters>

## Verification

- <Commands run and results. Say “Not run” for missing checks.>

## Risks / notes

- <Blockers, assumptions, caveats, or compatibility notes.>

## Recommended next step

1. <The next concrete action.>
```

## Output summary

When done, report:

- `HANDOVER.md` path
- whether it was created or refreshed
- key pending item, if any
- verification performed
