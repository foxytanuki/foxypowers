export default async function foxypowersPlugin() {
  return {
    "command.execute.before": async (input, output) => {
      if (input.command !== "wt") return;

      output.parts = [
        {
          type: "text",
          text: [
            "Use `.worktrees/` for this task.",
            "On first use, ask whether to ignore it via `.gitignore` or `.git/info/exclude`.",
            "Use standard `git worktree` commands only.",
          ].join(" "),
        },
      ];
    },
  };
}
