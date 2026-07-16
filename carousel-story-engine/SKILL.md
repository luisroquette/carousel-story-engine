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
- Compress the idea before decorating it. Fewer, sharper claims beat a crowded deck.
- Prefer names, dates, numbers, mechanisms, and observable examples.
- Use AI as an editor and production system, not as a source of invented facts.
- Keep the brand's voice and visual identity distinct from any reference account.
- Vary pace and layout deliberately. A carousel should feel edited, not assembled from eight matching templates.

## Required inputs

Infer what is safe to infer. Ask only for information that materially changes the result:

1. Topic or source material
2. Audience
3. Desired outcome: reach, authority, leads, or sales
4. Platform: Instagram or LinkedIn
5. Brand voice and visual constraints, when available
6. Slide count, CTA, and asset preferences, when specified

Default to 8 slides, Instagram 1080 x 1350, an editorial tone, and a soft CTA.

When the user supplies previous posts, transcripts, or brand copy, extract a compact voice fingerprint before drafting:

```text
Vocabulary: recurring words, technical language, and words to avoid
Rhythm: typical sentence length, punctuation, and degree of informality
Point of view: what the brand tends to notice, defend, or challenge
Signature behavior: examples, analogies, humor, directness, or restraint
```

Imitate the underlying choices, never memorable phrases from the samples.

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

Choose an evidence mode before writing:

- **Reported:** supported by named external sources.
- **Observed:** supported by a supplied case, transcript, dataset, or direct example.
- **Thesis:** a reasoned point of view with no empirical proof supplied.

In thesis mode, frame claims as arguments rather than universal facts. Never turn a provocative premise such as “clients buy less risk” into an unsupported absolute such as “clients do not buy frameworks.”

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

Also reject:

- binary slogans shaped as “not X, but Y”;
- universal claims unsupported by the chosen evidence mode;
- a provocative sentence that merely restates the user's premise;
- hooks whose only difference is punctuation or word order;
- familiar advice with no fresh mechanism, consequence, or example.

If the user did not ask to choose, select the highest-scoring hook and show the top three alternatives briefly.

### 3. Build the narrative spine

Before writing slides, define:

```text
Hook -> Context -> Mechanism -> Evidence -> Implication -> Application -> CTA bridge
```

Write one sentence for the promise, one for the payoff, and one for the evidence boundary. If the argument cannot progress without repeating the hook, return to framing.

Stress-test the spine against four silent reader objections:

```text
Why should I care?
How exactly does this work?
What supports this claim?
What can I do with it?
```

The deck does not need to state these questions, but it must answer them in a sensible order.

Adapt the sequence to the material. A case study may use situation, decision, mechanism, result, lesson. A contrarian thesis may use common belief, contradiction, evidence, explanation, implication.

Do not force every topic into the recommended sequence. Change the number, order, or role of slides when the argument becomes clearer. Use one genuine pattern break near the middle: a concrete example, sourced quote, sharp comparison, image-led pause, or useful diagram.

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
Transition: what new question or implication pulls the reader forward
Visual component: photo, comparison, timeline, diagram, quote, data card, or type-only
Composition: concrete placement, scale, hierarchy, and accent behavior
Source note: only when factual support is needed
```

Writing constraints:

- Keep headlines concrete and readable at phone size.
- Keep cover headlines to roughly 4 to 10 words. The cover must make sense without its body copy; remove the subtitle when it only repeats the headline.
- Read the cover literally. Its subject, action, and object must express the intended claim without relying on the caption or an ambiguous abstraction.
- Use no more than two short text blocks per slide.
- Target 65 characters or fewer for an internal headline and 240 characters or fewer for body copy. Exceed only when meaning would otherwise be lost.
- Preserve natural articles and connective words.
- Avoid sentence fragments used only to sound dramatic.
- Avoid “not X, but Y” constructions, including close paraphrases.
- Avoid em dashes used as dramatic hinges. Prefer a full stop, comma, colon, or a rewritten sentence.
- Avoid paired sentences with mirrored rhythm that manufacture contrast without adding evidence.
- Avoid dramatic triads: three short sentences in sequence with the same grammatical shape. Combine them or vary the rhythm.
- Avoid generic AI phrasing, corporate jargon, and motivational filler.
- Avoid artificial suspense such as “the last question changes your business” or “what comes next changes everything.” State the consequence directly.
- Do not repeat the cover claim without adding information.
- Put necessary nuance in the deck, not only in the caption.
- Use a concrete object, decision, behavior, example, or mechanism on every slide after the cover.
- Anchor an abstract claim with an observable example on the same slide or the next one. Never stack two purely conceptual slides.
- Prefer active verbs and concrete nouns. Replace nominalizations such as “optimization of the process” with the actor and action.
- Vary copy density. Follow a dense explanatory slide with a lighter example, comparison, or image-led slide when the story permits it.
- Give visual direction that a designer could execute without guessing. “Use clean typography” is insufficient.

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
6. Redundancy test: does each slide add a fact, mechanism, consequence, example, or decision?
7. Absolutism test: is a thesis being presented as measured fact?
8. CTA test: does the requested action logically follow from the value delivered?
9. Rhythm test: remove dramatic punctuation, mirrored slogans, and sequences of equally short sentences.
10. Skeptic test: answer “so what?”, “says who?”, and “how exactly?” where each objection first becomes reasonable.
11. Compression test: remove any sentence whose deletion leaves the meaning unchanged.
12. Voice test: could this exact copy appear on five unrelated expert accounts? If yes, add a sharper observation, example, or brand-specific choice.

Never deliver the first draft. Run one silent revision pass after QA. Rewrite weak hooks, remove repeated ideas, replace vague visual directions, and tighten the caption before presenting the result.

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

Do not repeat the same primary composition more than twice in a row. Variation must follow the information, not decoration. Keep stable brand tokens while changing scale, alignment, density, component, or image behavior.

For each slide, select a component because it fits the information:

- comparison for competing choices;
- timeline for sequence or change;
- diagram for a mechanism;
- data card for one important number;
- quote treatment for a sourced human statement;
- type-only layout for a concise thesis or transition;
- photo when a person, place, product, or event is evidence.

Use a visual metaphor only when its meaning is immediate and more useful than a literal representation. Prefer a process diagram, annotated artifact, or real comparison when the metaphor would merely decorate the claim.

When generating HTML, render each slide at native size. Wait for `document.fonts.ready`. Export each `.slide` element individually rather than capturing the viewport.

### 7. Write the caption

Create:

1. a first line under 125 characters;
2. concise context and interpretation;
3. sources when applicable;
4. one clear CTA;
5. only relevant hashtags, when the platform benefits from them.

Do not duplicate the full carousel in the caption.

The caption must add at least one of these: source context, a practical application, a limitation, or a useful question. If it adds none, shorten it to a one-line framing statement plus the CTA.

Treat the caption as the ninth piece of the argument, not a summary. It may show a behind-the-scenes decision, give one exercise, qualify the thesis, or invite a precise professional disagreement.

Do not repeat the final slide's question or instruction verbatim in the caption. Add a complementary action or end cleanly when the slide already carries the CTA.

Match the CTA to the objective:

- Reach: invite a specific share only when another person clearly benefits.
- Authority: invite a substantive reply, profile visit, or follow tied to the topic.
- Leads: offer a genuinely relevant resource or diagnostic with a clear delivery path.
- Sales: name the next commercial step without disguising it as engagement.

Avoid generic “save this” or “comment below” CTAs unless the content gives a concrete reason to do so.

Do not use “follow for more” as a fallback. Recommend following only when the user has defined a recurring editorial promise that the next posts will fulfill. Otherwise end with a topic-specific diagnostic, decision, or question.

Use no hashtags by default on LinkedIn. On Instagram, use zero to five precise hashtags only when they improve discovery; never append broad category tags automatically.

## Delivery formats

Choose the smallest format that satisfies the request:

- Strategy only: brief, selected hook, and narrative spine
- Copy deck: slide-by-slide copy and caption
- Production brief: copy plus visual direction and assets list
- Rendered carousel: HTML preview and exported PNG files

Begin a full delivery with a compact decision summary:

```text
Evidence mode:
Selected angle:
Cover promise:
Reader payoff:
Objective and CTA:
```

Then separate the deliverable into two layers:

1. **Publishable copy:** only the words that appear on slides and in the caption.
2. **Production notes:** role, transition, component, composition, asset, and source notes.

Do not mix internal scores, rejected hooks, reasoning, or QA commentary into publishable copy unless the user asks to inspect the editorial process.

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
