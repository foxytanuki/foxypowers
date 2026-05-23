# Source: project-infographic skill trial

The `project-infographic` skill creates fixed-format, project-branded infographics.

Purpose:

- Lower cognitive load by keeping the infographic format stable.
- Make outputs from the same project recognizable through consistent theme and logo usage.
- Use `project-onepage-v1` as the default format.
- Use a 16:9 one-page bento layout.
- Use a top bar, hero section, density preset cards, and footer.
- Use `standard` density with 6 cards for this trial.
- Store project brand defaults in `.project-infographic/<project>.md`.
- Write the final prompt to `prompts/infographic.md` before image generation.
- Use Codex CLI built-in `image_gen`; do not write an image API script.

Version-control policy:

- Commit `.project-infographic/*.md` when it contains only project theme defaults.
- Do not put secrets, unreleased private messaging, licensed font files, or large binary logo assets directly in `.project-infographic`.
- Ignore only local override files when private local paths are needed.
