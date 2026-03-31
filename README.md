# foxypowers

Instruction-first repo for OpenCode/Codex-style agents.

Purpose: keep the approved git-worktree workflow concise and easy to follow.

## Worktree convention

- Main work stays in the repo root; feature/task work normally goes in `.worktrees/`.
- Use standard `git worktree` commands, not custom wrappers.
- First use of `.worktrees/` should be confirmed with the user: `.gitignore` or `.git/info/exclude`.
- This is not the full superpowers workflow.

Examples:

```bash
git worktree add .worktrees/<name> -b <branch>
git worktree remove .worktrees/<name>
```

See `docs/git-worktrees.md` for the practical rules.
