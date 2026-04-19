---
title: "Designing with AI: The Anthropic Five"
date: "2026-04-19"
description: "The five design patterns from Anthropic's Building Effective Agents — Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, and Evaluator-Optimizer."
tags: ["ai", "agents", "design-patterns", "architecture", "anthropic"]
---

If you've done pair programming before, you know there's a difference between *what you're building* and *how you're building it*. The Anthropic Five live at the "what" level — they're design patterns for agentic systems, in the same tradition as the Gang of Four patterns for object-oriented software. They answer the question: **how should this system be structured?**

These patterns come from Anthropic's [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) and represent the most common architectures seen in production agentic systems.

---

## Workflows vs. Agents

Before the five patterns, one distinction worth internalizing: Anthropic separates *workflows* from *agents*.

- **Workflows** — LLMs operate through predefined code paths. The structure is set by the engineer; the LLM makes decisions within it.
- **Agents** — the LLM dynamically directs its own process, deciding what to do next based on what it observes.

Most of the five patterns below are workflow patterns. That's not a limitation — for many problems, a well-designed workflow outperforms a fully autonomous agent, because it's more predictable, cheaper to run, and easier to debug. Choose autonomy when you need it, not by default.

---

## The Five Patterns

### 🔗 Prompt Chaining
*Sequential steps, each building on the last.*

The output of one LLM call becomes the input of the next, forming a pipeline. Each step is focused and independently optimizable. Because every handoff is inspectable, this is the easiest pattern to debug.

**Good for:** Tasks with a clear, predictable sequence of stages — document transformation, multi-step code generation, translation pipelines.

---

### 🔀 Routing
*Classify the input, then dispatch to a specialist.*

An initial LLM call categorizes the input and routes it to a handler optimized for that category. Instead of one generalist prompt trying to handle everything, each route can be tuned independently.

**Good for:** Systems handling diverse inputs — support triage, intent classification, any workflow where "what kind of thing is this?" determines "how we handle it."

---

### ⚡ Parallelization
*Run independent subtasks concurrently.*

Two variants: **sectioning** divides a task into parallel workstreams (different agents reviewing different files simultaneously); **voting** runs the same task multiple times across independent agents and aggregates results to increase confidence.

**Good for:** Speed-critical tasks, or situations where independent verification improves reliability — security reviews, test generation, research synthesis.

---

### 🎯 Orchestrator-Workers
*A coordinator delegates to specialists at runtime.*

A central LLM (the orchestrator) dynamically breaks down a task and assigns subtasks to worker LLMs. Unlike Prompt Chaining, the breakdown isn't predetermined — the orchestrator figures out the shape of the work as it goes.

**Good for:** Complex tasks where the required subtasks aren't known in advance. Multi-file changes, open-ended research, any problem where planning and doing are interleaved.

---

### 🔄 Evaluator-Optimizer
*Generate, critique, refine — repeat.*

One LLM generates output; a separate evaluator LLM critiques it against defined quality criteria; the generator revises. The loop continues until quality criteria are met or a maximum iteration count is reached.

**Good for:** Tasks where quality is measurable and iterative refinement has clear value — documentation, code meeting specific standards, outputs that need to pass a defined bar.

---

## Choosing a Pattern

These patterns aren't mutually exclusive. Production systems often combine them — an Orchestrator-Workers setup might use Parallelization for one of its worker steps, or wrap an Evaluator-Optimizer loop inside a broader Prompt Chain.

The design principle Anthropic emphasizes is worth repeating: **start simple, add complexity only when it demonstrably improves outcomes.** A well-tuned Prompt Chain will outperform a poorly-designed multi-agent system every time. Reach for more sophisticated patterns when simpler ones have a measurable ceiling, not before.
