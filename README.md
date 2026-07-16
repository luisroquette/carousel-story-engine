# Carousel Story Engine

Turn a rough idea into a carousel people can actually finish, save, and share.

`carousel-story-engine` is a portable AI skill for producing evidence-led Instagram and LinkedIn carousels. It handles the difficult parts that generic “write me eight slides” prompts skip: research, angle selection, hook comparison, narrative structure, editorial QA, visual direction, and production-ready output.

## Why this exists

Most AI carousels look polished for half a second and collapse when you read them. The hook overpromises, the middle repeats itself, the facts have no source, and the CTA arrives from nowhere.

This skill adds an editorial process before the design work begins. It helps an AI agent decide what the story is, why a specific audience should care, and what evidence can support the argument.

## What it does

- Researches and verifies claims when the topic requires it
- Extracts the change, tension, mechanism, evidence, and audience payoff
- Generates competing hooks instead of settling for the first idea
- Builds a narrative spine before writing slides
- Produces slide copy, visual direction, caption, and CTA
- Detects generic AI writing and unsupported claims
- Supports HTML/PNG rendering workflows
- Learns from your own performance data instead of trusting universal “viral formulas”

## Quick start

Copy the skill folder into your agent's skills directory:

```bash
git clone https://github.com/luisroquette/carousel-story-engine.git
cp -R carousel-story-engine/carousel-story-engine ~/.codex/skills/
```

Then ask:

```text
Use $carousel-story-engine to turn this research into an eight-slide Instagram carousel for independent consultants. The goal is authority, not direct sales.
```

You can also provide a URL, article, transcript, opinion, case study, product insight, or a rough voice note transcription.

## Example requests

```text
Use $carousel-story-engine to find three strong angles in this article, compare the hooks, and write the best carousel.
```

```text
Use $carousel-story-engine to audit this draft. Keep the core argument, remove generic AI writing, verify the statistics, and improve the narrative progression.
```

```text
Use $carousel-story-engine to create production-ready copy and visual direction in our brand voice. Return structured JSON for our renderer.
```

## The workflow

```text
Research
  -> Editorial framing
  -> Hook tournament
  -> Narrative spine
  -> Slide writing
  -> Editorial QA
  -> Visual direction
  -> Caption and CTA
  -> Performance learning
```

The skill includes approval-friendly stages, so teams can review the hook and argument before spending time on layout.

## Output options

Ask for only what you need:

- strategy and hook options;
- slide-by-slide copy;
- copy plus visual production brief;
- structured JSON;
- HTML preview and PNG exports, when your agent has rendering tools.

## Design philosophy

The skill provides layout constraints and hierarchy rules without forcing a cloned visual identity. Your brand should remain recognizable. Reference accounts can inform quality, but they should never become templates to copy.

## Works with

- Codex
- Claude Code
- Cursor and other agents that support Markdown-based skills or rules
- Manual prompt workflows, by attaching `SKILL.md` as project context

Tool availability varies. Research and rendering steps adapt to the tools available in the host agent.

## What it does not promise

No honest system can guarantee virality. Distribution changes, audiences differ, and a large account's winning formula may fail in another niche.

This skill improves the quality and repeatability of the decisions you control: topic, evidence, hook, argument, design direction, and learning.

## Repository structure

```text
carousel-story-engine/
├── README.md
├── LICENSE
└── carousel-story-engine/
    ├── SKILL.md
    └── agents/
        └── openai.yaml
```

## License

MIT. Use it, adapt it, and ship work that sounds like your brand.

If the skill improves your next carousel, star the repository. It helps other builders find it.
