---
description: Create or refresh task worklogs under docs/worklogs
---

# /worklog

Create or refresh a durable task document that lets another agent or future session continue the work without hidden chat context.

## Purpose

Keep task state in `docs/worklogs/NNN-short-name.md`, with enough background, tracking, acceptance criteria, and file references for a fresh agent/session to complete the task safely.

Use this when:

- starting a non-trivial task
- handing work to another agent/session
- resuming work after context loss
- the user asks for 作業ドキュメント, worklog, 引き継ぎ, or task tracking in docs

## Path rules

- Store worklogs under `docs/worklogs/`.
- Use a sequential numeric prefix: `001-short-name.md`, `002-short-name.md`, etc.
- Keep names short, lowercase, and descriptive.
- If a relevant worklog already exists, refresh it instead of creating a duplicate.
- Create `docs/worklogs/` if it does not exist.

## Required content

The document should contain the information needed to execute the task with no prior session context:

- task summary
- background / why this work exists
- current status
- completion tracking as a todo list
- acceptance criteria
- relevant files and why they matter
- decisions / assumptions
- verification commands and results
- risks, blockers, or open questions
- recommended next action

Do not include secrets, private credentials, or sensitive personal data.

## Workflow

1. Inspect existing worklogs under `docs/worklogs/`.
2. Pick the existing relevant file, or create the next sequential file.
3. Gather current task context from the conversation, git status, diffs, and relevant files.
4. Write or refresh the worklog using the template below.
5. Verify the document is readable and references concrete paths.

## Template

```markdown
# <Task title>

## Summary

- <One to three bullets describing the work.>

## Background

- <Why this task exists and what problem it solves.>

## Current status

- <What is already known/done.>

## Todo

- [ ] <Concrete remaining step>
- [ ] <Concrete remaining step>

## Acceptance criteria

- [ ] <Observable condition for completion>
- [ ] <Required verification/result>

## Relevant files

- `<path>` — <why it matters>

## Decisions / assumptions

- <Decision or assumption, with rationale if useful.>

## Verification

- <Command run and result, or “Not run yet”.>

## Risks / blockers / open questions

- <Risk, blocker, or “None known”.>

## Recommended next action

1. <The next concrete action.>
```

## Output summary

When done, report:

- worklog path
- whether it was created or refreshed
- current next action
- verification performed
