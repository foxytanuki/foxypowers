---
name: git-worktree-guidance
description: Minimal guidance for using git worktrees with this repo.
---

# git worktree guidance

Use plain `git worktree` for task isolation.

- Keep main work in the repo root.
- Put feature/task work in `.worktrees/`.
- Use standard git commands only; no wrapper scripts or automation.
- On first use of `.worktrees/`, decide whether to ignore it via `.gitignore` or `.git/info/exclude`.
- Keep worktrees short-lived and remove them when done.
