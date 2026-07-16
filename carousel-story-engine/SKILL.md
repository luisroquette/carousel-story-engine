---
name: carousel-story-engine
description: Create evidence-led Instagram and LinkedIn carousels with strong hooks, editorial storytelling, slide-by-slide copy, visual direction, captions, and optional HTML/PNG rendering. Use when turning a topic, trend, article, case study, opinion, product insight, or research finding into a polished social carousel; improving a weak carousel; generating multiple hook options; or building a repeatable carousel workflow for a brand.
---

# Carousel Story Engine

Turn a raw idea into a clear, credible, visually directed carousel. Optimize for reader value, shares, saves, and qualified action. Never promise virality.

## Operating principles

- Start with a concrete subject, not a generic content category.
- Lead with tension, change, consequence, or a useful unresolved question.
- Separate fact, interpretation, and recommendation.
- Make every slide advance one narrative.
- Prefer names, dates, numbers, mechanisms, and observable examples.
- Use AI as an editor and production system, not as a source of invented facts.
- Keep the brand's voice and visual identity distinct from any reference account.

## Required inputs

Infer what is safe to infer. Ask only for information that materially changes the result:

1. Topic or source material
2. Audience
3. Desired outcome: reach, authority, leads, or sales
4. Platform: Instagram or LinkedIn
5. Brand voice and visual constraints, when available
6. Slide count, CTA, and asset preferences, when specified

Default to 8 slides, Instagram 1080 x 1350, an editorial tone, and a soft CTA.

## Workflow

### 1. Verify and frame

When the topic contains current events, statistics, named cases, medical, legal, financial, or otherwise consequential claims:

- research before drafting;
- prefer primary and authoritative sources;
- record a source for every material factual claim;
- mark unresolved claims instead of filling gaps;
- distinguish the source's conclusion from your inference.

Extract this internal brief:

```text
Change: what happened or is changing?
Tension: why is it surprising, costly, or disputed?
Mechanism: what explains it?
Evidence: which facts make the argument credible?
Audience bridge: why should this specific audience care?
Payoff: what will the reader understand or do differently?
```

Reject the topic when the audience bridge is forced or the evidence cannot support the promised payoff.

### 2. Create a hook tournament

Generate 6 to 10 materially different hooks. Vary the angle, not just the wording:

- change or ending;
- hidden mechanism;
- contradiction;
- named case;
- identity or generational behavior;
- consequence;
- investigation;
- counterintuitive thesis.

Score each hook from 1 to 5 on:

| Dimension | Question |
|---|---|
| Specificity | Does it contain a concrete subject? |
| Tension | Is there a meaningful unresolved conflict? |
| Credibility | Can the carousel fulfill the claim? |
| Relevance | Will the intended reader care now? |
| Distinctiveness | Could a generic account have written it? |

Reject hooks that rely on vague revelation, empty urgency, listicle filler, clickbait the deck cannot repay, or repetitive doom language.

If the user did not ask to choose, select the highest-scoring hook and show the top three alternatives briefly.

### 3. Build the narrative spine

Before writing slides, define:

```text
Hook -> Context -> Mechanism -> Evidence -> Implication -> Application -> CTA bridge
```

Adapt the sequence to the material. A case study may use situation, decision, mechanism, result, lesson. A contrarian thesis may use common belief, contradiction, evidence, explanation, implication.

### 4. Write the slides

Use one main idea per slide. Each slide must earn the swipe to the next.

Recommended eight-slide structure:

1. Cover: complete promise with a specific hook
2. Context: establish the change or problem
3. Tension: reveal why the obvious explanation is incomplete
4. Mechanism: explain how it works
5. Evidence: provide proof, data, or a named example
6. Implication: show what the evidence changes
7. Application: translate it for the audience
8. CTA: connect naturally to the reader's next step

For every slide, provide:

```text
Slide N
Role:
Headline:
Body:
Visual direction:
Source note: only when factual support is needed
```

Writing constraints:

- Keep headlines concrete and readable at phone size.
- Use no more than two short text blocks per slide.
- Preserve natural articles and connective words.
- Avoid sentence fragments used only to sound dramatic.
- Avoid repeated "not X, but Y" constructions.
- Avoid generic AI phrasing, corporate jargon, and motivational filler.
- Do not repeat the cover claim without adding information.
- Put necessary nuance in the deck, not only in the caption.

### 5. Run editorial QA

Rate every dimension from 1 to 10. Revise any dimension below 8:

- factual accuracy;
- promise fulfillment;
- narrative progression;
- specificity;
- clarity;
- natural voice;
- usefulness to the intended audience.

Apply these final tests:

1. Substitution test: if another subject can replace the real one without changing the slide, rewrite it.
2. Share test: does sharing help the reader express identity, competence, or care?
3. Source test: can every important factual claim be traced?
4. Mobile test: is each slide understandable in three seconds?
5. Payoff test: does the deck answer the question created by the cover?

### 6. Direct the visual system

Create an original visual language from the user's brand. Do not clone a reference account.

Use:

- 1080 x 1350 canvas for Instagram;
- minimum 56 px horizontal safe area and 80 px bottom safe area;
- contrast ratio of at least 4.5:1 for body text;
- three levels of hierarchy: primary message, supporting context, metadata;
- one accent color used selectively;
- consistent brand, category, and progress components;
- purposeful variation in light/dark layouts, image use, scale, and whitespace.

Avoid decorative arrows that imitate native swipe behavior, tiny body copy, arbitrary gradients, repeated identical layouts, and images that add no evidence or emotion.

When generating HTML, render each slide at native size. Wait for `document.fonts.ready`. Export each `.slide` element individually rather than capturing the viewport.

### 7. Write the caption

Create:

1. a first line under 125 characters;
2. concise context and interpretation;
3. sources when applicable;
4. one clear CTA;
5. only relevant hashtags, when the platform benefits from them.

Do not duplicate the full carousel in the caption.

## Delivery formats

Choose the smallest format that satisfies the request:

- Strategy only: brief, selected hook, and narrative spine
- Copy deck: slide-by-slide copy and caption
- Production brief: copy plus visual direction and assets list
- Rendered carousel: HTML preview and exported PNG files

When the user asks for a repeatable system, also return structured JSON:

```json
{
  "topic": "",
  "audience": "",
  "objective": "authority",
  "selected_hook": "",
  "sources": [],
  "slides": [
    {
      "number": 1,
      "role": "cover",
      "headline": "",
      "body": "",
      "visual_direction": ""
    }
  ],
  "caption": "",
  "cta": ""
}
```

## Learning loop

When performance data is available, record results by hook angle, topic, slide count, format, CTA, visual treatment, and publication time. Prefer shares per reach, saves per reach, profile visits, qualified followers, leads, and sales over likes alone.

Treat external benchmarks as hypotheses until the user's own data validates them.
