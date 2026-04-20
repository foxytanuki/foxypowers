---
description: Prompt for git worktree setup in .worktrees/
---

# /wt

Set up or update git worktree work for this repo.

- Use plain `git worktree` for task isolation.
- Keep main work in the repo root.
- Put feature or task work in `.worktrees/`.
- Use standard git commands only; do not add wrapper scripts or extra automation.
- On first use of `.worktrees/`, ask whether it should be ignored via `.gitignore` or `.git/info/exclude`.
- Keep worktrees short-lived and remove them when done.
