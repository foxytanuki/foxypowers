# Git worktrees for agents

Use plain git worktrees to isolate task branches without extra tooling.

## Recommended flow

1. One branch/task = one worktree.
2. Keep main work in the repo root.
3. Put feature/task work in `.worktrees/`.
4. Clean up the worktree when done.

Example commands:

```bash
git worktree add .worktrees/<name> -b <branch>
git worktree list
git worktree remove .worktrees/<name>
```

## Notes for agents

- Prefer standard git commands; avoid wrapper scripts and plugin machinery.
- On first use of `.worktrees/`, ask the user whether to use `.gitignore` or `.git/info/exclude`.
- Use `.gitignore` for a shared convention; use `.git/info/exclude` for a local-only choice.
- Be aware `.worktrees/` can add search, watcher, and LSP noise; keep scope tight and remove finished worktrees.
