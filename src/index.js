export default async function foxypowersPlugin() {
  const investigationReminder =
    "During investigation, first bundle likely causes, evidence, candidate fixes, and a recommended next step before asking clarifying questions.";

  return {
    "experimental.session.compacting": async (_input, output) => {
      output.context.push(investigationReminder);
    },

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
