---
name: codex-image-gen
description: Use Codex CLI built-in image_gen from OpenCode without writing image API scripts, including workspace-safe output handling and avoiding project-local .codex state.
---

# Codex Image Generation Skill

Use this skill when the user wants to generate an image through Codex CLI's built-in `image_gen` tool from OpenCode.

Typical triggers:

- “codex cli 経由で image gen”
- “Use the built-in image_gen tool. Do not write an API script.”
- “画像生成プロンプトを実行して”
- “API scriptを書かずに画像を作って”
- “.codex が毎回生成されるのを避けたい”

## Goal

Run Codex CLI as a short-lived image generation worker:

1. Read an existing prompt file or inline prompt.
2. Use Codex's built-in `image_gen` tool.
3. Save the image to the requested repository path.
4. Do not write OpenAI/image API scripts.
5. Avoid leaving Codex session state in the repository.

## Rules

- Use `codex exec`; do not implement an image API client.
- Prefer an existing prompt file as the source of truth.
- Ask for output path if it is not specified.
- Use `--sandbox workspace-write` and `-C "$PWD"` so outputs are written relative to the repo.
- Use `--ephemeral` to avoid persisting Codex session files.
- Set `CODEX_HOME` to an absolute user-level directory, not a project-local path.
- Do not delete an existing project `.codex` file or directory automatically unless the user asks.
- If `image_gen` is unavailable, report that clearly and do not create a placeholder image.
- Verify the output with `file <output>` after generation.

## Why `.codex` may appear

Codex CLI normally stores auth/config/session state under `CODEX_HOME` or the user's default Codex home, usually `~/.codex`.

A repository-local `.codex` file or directory can appear when:

- `CODEX_HOME` is set to `.codex` or `$PWD/.codex`.
- the command is launched with a modified `HOME` pointing at the repository.
- a wrapper script intentionally isolates Codex state inside the workspace.
- non-ephemeral `codex exec` persists session data in the configured Codex home.

For image generation from OpenCode, prefer this pattern:

```sh
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  "Read <prompt-file>. Use the built-in image_gen tool. Do not write an API script. Save the resulting image as <output-image>. If image_gen is unavailable, explain clearly and do not create a placeholder image."
```

If `.codex` still appears in the repository, check:

```sh
printf 'HOME=%s\nCODEX_HOME=%s\nPWD=%s\n' "$HOME" "${CODEX_HOME:-}" "$PWD"
```

Then run with an explicit absolute Codex home:

```sh
CODEX_HOME="$HOME/.codex" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" "..."
```

## Workflow

### 1. Confirm Codex CLI

```sh
command -v codex && codex --version
```

### 2. Read the prompt

Use the user's prompt file when provided, for example:

```txt
tmp/business-opportunity-web-ui.prompt.md
```

The prompt should include:

- `Use the built-in image_gen tool. Do not write an API script.`
- image aspect ratio / size intent
- visual style
- output path
- fallback behavior when `image_gen` is unavailable

### 3. Run Codex image generation

Single prompt file:

```sh
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  "Read <prompt-file>. Use the built-in image_gen tool. Do not write an API script. Save the resulting image exactly as requested in the prompt. If image_gen is unavailable, explain clearly and do not create a placeholder image."
```

Prompt file plus reference image:

```sh
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  --image <reference-image> \
  "Read <prompt-file>. Use the attached image as visual reference. Use the built-in image_gen tool. Do not write an API script. Save the resulting image exactly as requested in the prompt."
```

Multiple images should usually be separate `codex exec --ephemeral` calls so each prompt/output pair is isolated.

### 4. Verify output

```sh
file <output-image>
```

Also check that no unwanted project-local Codex state was created:

```sh
test ! -e .codex
```

If `.codex` exists but is already ignored, mention it. Do not remove it without explicit approval.

## Example for this repository

```sh
CODEX_HOME="$HOME/.codex" \
codex exec --ephemeral --sandbox workspace-write -C "$PWD" \
  "Read tmp/business-opportunity-web-ui.prompt.md. Use the built-in image_gen tool. Do not write an API script. Save the resulting image exactly as requested in the prompt. If image_gen is unavailable, explain clearly and do not create a placeholder image."

file tmp/business-opportunity-web-ui.png
test ! -e .codex
```

## Output summary

When done, report:

- prompt file used
- generated image path
- whether Codex CLI built-in `image_gen` was used
- whether `.codex` was created or avoided
- verification result
