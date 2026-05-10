export default async function foxypowersPlugin() {
  const investigationReminder =
    "During investigation, first bundle likely causes, evidence, candidate fixes, and a recommended next step before asking clarifying questions.";

  return {
    "experimental.session.compacting": async (_input, output) => {
      output.context.push(investigationReminder);
    },
  };
}
