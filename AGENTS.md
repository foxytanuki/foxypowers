# Agent notes

This repo is maintainer-focused and intentionally small.

- Keep the plugin code minimal.
- Keep slash commands self-contained; do not rely on separately installed skills.
- Keep canonical worktree guidance in `commands/wt.md`.
- Use `commands/tidy-docs.md` when docs need cleanup or reorganization.
- When behavior changes, check whether related docs need updates.
- Keep one canonical source per topic; delete duplicates instead of syncing them.
- During investigation, first gather likely causes and independent checks before asking the user to continue.
- Default to replying with likely causes, supporting evidence, candidate fixes, and a recommended next step together.
- Ask clarifying questions only when the answer materially changes the recommendation or unblocks safe execution.
- Avoid stopping at phrases like `continue` or `必要なら次に`; include the next concrete action instead.
- Keep `README.md` short.
- Do not add wrapper scripts or extra automation.
- Do not add heavy OpenCode hooks.
