---
title: "Designing with AI: Agentic Design Patterns"
date: "2026-04-19"
description: "Five design patterns from Anthropic's Building Effective Agents: Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, and Evaluator-Optimizer."
tags: ["ai", "agents", "design-patterns", "architecture", "anthropic"]
---

There's a difference between _what you're building_ and _how you're building it_. Whether you are architecting a fully autonomous system or engaging in a "piloted session" (where you and an AI agent work together in real-time), certain recurring patterns emerge.

Anthropic's [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)[^1] identifies five of these. They follow the tradition of the "Gang of Four" patterns for object-oriented software[^2]: a shared vocabulary for design decisions that help you avoid reinventing the wheel.

---

## Workflows vs. Agents

Before diving into the patterns, it’s essential to distinguish between _workflows_ and _agents_.

- **Workflows:** Systems where LLMs operate through predefined, hard-coded paths. The engineer sets the structure; the LLM handles the logic within it. This maximizes **predictability**. For example: a bash script that calls an LLM to summarize a git diff.
- **Agents:** Systems where the LLM dynamically directs its own process, deciding which tools to use and what steps to take based on the environment. This maximizes **flexibility**. For example: a coding agent that decides whether to run a bash script, search the codebase, or delegate a sub-task to another agent.

Most of the five patterns below are workflow patterns. For many problems, a well-defined workflow outperforms a fully autonomous agent. It is more reliable, cheaper to run, and easier to debug.

---

## The Five Patterns

### 1. Prompt Chaining

_Sequential steps, each building on the last._

The output of one LLM call becomes the input for the next, forming a pipeline. Each step is focused and independently optimizable. Because every handoff is inspectable, this is the easiest pattern to debug. It works well for tasks with a clear sequence, such as document transformation or multi-step code generation.

**In a piloted session:** This looks like a deliberate sequence of focused prompts. Ask the agent to map the codebase, review that map, draft a plan, and then implement one file at a time. You carry the context forward manually, ensuring quality at every link in the chain.

---

### 2. Routing

_Classify the input, then dispatch to a specialist._

An initial LLM call categorizes the input and routes it to a handler optimized for that specific task. This allows you to tune each route independently. Use this for systems handling diverse inputs, like support triage or intent classification.

**In a piloted session:** Routing is often a conscious choice of model or tool. You might use a fast, "cheap" model for boilerplate code, a reasoning-heavy model for architectural decisions, and a specialized agent for writing tests. You act as the router, dispatching tasks to the "worker" best suited for the job.

---

### 3. Parallelization

_Run independent subtasks concurrently._

This pattern has two main variants:

- **Sectioning:** Dividing a task into parallel workstreams (e.g., three agents reviewing three different files simultaneously).
- **Voting:** Running the same task multiple times across independent agents and aggregating the results to reach a consensus.

**In a piloted session:** Sectioning looks like opening multiple agent sessions to tackle independent parts of a feature at once. Voting looks like posing the same difficult architectural question to two separate sessions to compare their reasoning before you commit to a path.

---

### 4. Orchestrator-Workers

_A coordinator delegates to specialists at runtime._

A central LLM (the orchestrator) dynamically breaks down a complex task and assigns subtasks to worker LLMs. The orchestrator determines the shape of the work as it goes. This works for problems where planning and "doing" must be interleaved, such as complex refactoring.

**In a piloted session:** You are the orchestrator. You break a large feature into discrete chunks, assign each to a fresh agent session, and integrate the results yourself. You maintain the high-level plan while the workers handle the implementation details.

---

### 5. Evaluator-Optimizer

_Generate, critique, refine._

One LLM generates an output; a separate evaluator critiques it against defined quality criteria; the generator then revises the work. The loop continues until the "gate" is passed. This pattern pays off when quality is measurable and iterative refinement adds clear value.

**In a piloted session:** This is the habit of feeding a generated diff to a fresh agent session with instructions to find the bugs, then taking that critique back to the original session to fix them. You can also act as the evaluator yourself, using your professional judgment as the final quality gate.

---

## Choosing a Pattern

These patterns aren't mutually exclusive. You'll often combine them: an Orchestrator-Workers setup might use Parallelization for a sub-step, or wrap an Evaluator-Optimizer loop inside a broader Prompt Chain.

The design principle Anthropic emphasizes is: **start simple.** Complexity introduces latency, increases token costs, and makes debugging harder. Reach for sophisticated patterns when simpler ones hit a measurable ceiling in performance or quality.

---

> **Note:** These five patterns are architectural structures for autonomous systems. To see how you can manually apply these same principles as tactical habits during a "piloted session," read the companion post: [Coding with AI: The SPAR Patterns](/blog/2026-04-19-coding-with-ai-the-spar-patterns/).

[^1]: Anthropic, [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

[^2]: Gamma, Helm, Johnson, Vlissides, [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
