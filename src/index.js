import { cp, mkdir, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));

async function syncDirectoryEntries(source, destination) {
  await mkdir(destination, { recursive: true });

  for (const entry of await readdir(source, { withFileTypes: true })) {
    await cp(join(source, entry.name), join(destination, entry.name), {
      force: true,
      recursive: true,
    });
  }
}

async function syncAssets() {
  const configRoot = join(
    process.env.XDG_CONFIG_HOME || join(process.env.HOME, ".config"),
    "opencode",
  );

  await Promise.all([
    syncDirectoryEntries(join(packageRoot, "commands"), join(configRoot, "commands")),
    syncDirectoryEntries(join(packageRoot, "skills"), join(configRoot, "skills")),
  ]);
}

export default async function foxypowersPlugin() {
  await syncAssets();

  const investigationReminder =
    "During investigation, first bundle likely causes, evidence, candidate fixes, and a recommended next step before asking clarifying questions.";

  return {
    "experimental.session.compacting": async (_input, output) => {
      output.context.push(investigationReminder);
    },
  };
}
