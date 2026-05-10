---
description: Prompt for safely cleaning git worktrees and unused branches
---

# /wt-clean

Clean up short-lived git worktrees and branches created for task isolation.

Use standard git commands only; do not add wrapper scripts or extra automation.

## Safety first

- Never remove the current worktree or current branch.
- Never remove `main`, `master`, `develop`, or release branches unless explicitly requested.
- Do not delete branches with unmerged work unless the user explicitly confirms the exact branch names.
- Before deleting anything, show the planned removals and ask for confirmation.

## Inspect

Run these checks first:

```sh
git worktree list --porcelain
git status --short --branch
git branch --format='%(refname:short) %(upstream:short) %(worktreepath)'
git branch --merged
git branch --no-merged
```

If remote branch cleanup is relevant, also run:

```sh
git fetch --prune
git branch -vv
```

## Recommend cleanup

Group candidates as:

1. Safe worktrees to remove: clean worktrees under `.worktrees/` whose task is done.
2. Safe local branches to delete: merged local branches not checked out in any worktree.
3. Needs confirmation: dirty worktrees, unmerged branches, branches with missing upstreams, or remote branch deletion.

For each candidate, include the reason and exact command.

## Remove after confirmation

Use:

```sh
git worktree remove .worktrees/<name>
git branch -d <branch>
```

Only when the user explicitly confirms unmerged branch deletion, use:

```sh
git branch -D <branch>
```

Only when the user explicitly asks to delete a remote branch, use:

```sh
git push origin --delete <branch>
```

After cleanup, verify with:

```sh
git worktree list
git branch --format='%(refname:short) %(upstream:short) %(worktreepath)'
```
