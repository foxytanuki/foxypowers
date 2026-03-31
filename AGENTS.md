# Agent notes

- Feature/task work should normally use `.worktrees/`.
- Use standard `git worktree` commands only; no custom wrappers.
- On first use of `.worktrees/`, ask the user whether to ignore it via `.gitignore` or `.git/info/exclude`.
- After that, follow the repo's actual ignore state.
- Example create: `git worktree add .worktrees/<name> -b <branch>`
- Example remove: `git worktree remove .worktrees/<name>`
