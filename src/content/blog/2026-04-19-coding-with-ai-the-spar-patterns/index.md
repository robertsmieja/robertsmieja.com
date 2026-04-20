---
title: "Coding with AI: The SPAR Patterns"
date: "2026-04-19"
description: "SPAR — Search, Plan, Account, Review — four session-level habits for effective agentic coding, framed as pair programming with an AI partner."
tags: ["ai", "agents", "pair-programming", "workflow"]
---

If you've done pair programming, you already understand the core dynamic: two people working on the same problem catch more bugs, make better design decisions, and stay more focused than one person working alone. The roles are asymmetric — Driver and Navigator — and switching between them deliberately is what makes the practice work.

Coding with an AI agent is pair programming with a particular kind of partner. The agent is tireless, fast, and has broad knowledge — but it has no persistent memory, no awareness of what happened before this session, and no ability to sense when it's drifting off course. Your job as the human is to compensate for those gaps while letting the agent do what it's good at.

**SPAR** is a set of four session-level habits for doing that well. The name reflects the dynamic: good agentic coding is a sparring match — a deliberate back-and-forth where each side plays to their strengths.

SPAR stands for **Search, Plan, Account, Review.**

---

## The Four Patterns

### 🔭 Search

_Read the codebase before touching it._

Before asking the agent to make any changes, have it search and map the relevant parts of the codebase first. A Search session produces **orientation, not output** — the agent reads key files, summarizes structure, identifies dependencies, and surfaces anything that might matter for the task ahead.

In pair programming terms, this is the walkthrough you do with a new pairing partner before sitting down to write code. You wouldn't hand someone a keyboard in an unfamiliar repo and say "fix it" — you'd show them around first.

Skipping Search is the most common cause of confident-sounding but wrong agent output. The agent will fill gaps in its understanding with plausible-sounding assumptions, and those assumptions compound.

**When to use it:** Starting a task in an unfamiliar codebase. After a long gap since you last worked in an area. Any time you're unsure what you don't know.

---

### 📐 Plan

_Agree on the approach before writing any code._

Have the agent produce an explicit written plan — which files to touch, what changes to make, in what order — and then **stop and wait for your review** before executing anything. You are the Navigator; the plan is the route you both agree on before the Driver starts moving.

The critical ingredient is the **human gate** between plan and action. Without it, Plan becomes the agent narrating what it's doing while it does it — which looks like planning but isn't. The written artifact (a `PLAN.md`, a checklist, a response you explicitly approve) is what makes the gate real.

This is also where you catch misunderstandings cheaply. A wrong assumption in the plan costs you a few seconds to correct. The same assumption baked into three files of generated code costs you much more.

**When to use it:** Any non-trivial feature or change. Tasks touching multiple files or systems. Any time the cost of going in the wrong direction is high.

---

### ✅ Account

_Check off completed steps as you go._

For tasks spanning many steps, have the agent maintain a running checklist — a TODO file, a progress log, a structured list of what's been completed and what remains. As each step finishes, it gets checked off. This turns ephemeral session context into a durable record both you and the agent can refer back to.

Without this, long agentic sessions drift. The agent loses track of earlier decisions, revisits already-solved problems, or contradicts work it did twenty minutes ago. A running account gives both parties a shared source of truth — the equivalent of the Navigator keeping notes during a long pairing session.

The pattern is deliberately named _Account_ rather than something like "save state" — the goal isn't a snapshot, it's an ongoing accounting of what's been done. The checklist grows and gets ticked off as work proceeds.

**When to use it:** Any task expected to span multiple sessions. Complex refactors. Multi-step debugging. Any time you might need to hand work off to a fresh session.

---

### 🔍 Review

_Audit the diff before you ship it._

After the agent produces changes, feed the diff to a fresh agent session — or step back and review it yourself — before committing. Ask for an audit: bugs, unintended side effects, deviation from the original plan, anything that smells wrong.

This is the pair programming habit of switching seats: the person who wrote the code is too close to it. A fresh perspective catches what the author glosses over. With an agent, this is even more important — the agent that wrote the code has been in a single thread of reasoning the whole time, and fresh-session eyes break that tunnel vision.

In practice, `git diff | claude review` is one of the highest-leverage habits in agentic engineering.

**When to use it:** After any substantive agent session. Before committing or opening a PR. After a session long or complex enough that drift might have crept in.

---

## SPAR as a Session Lifecycle

The four patterns map onto the natural shape of a working session:

```
Search  →  Plan  →  [execution + Account]  →  Review
                              ↑                    |
                              └────────────────────┘
```

You won't always need all four. A small task in familiar code might go straight to Plan. A quick bug fix might skip Search and end with a lightweight Review. The point is to recognize which pattern the moment calls for — and reach for it deliberately rather than just prompting and hoping.

---

## The Pair Programming Parallel

| Pair Programming             | SPAR    |
| ---------------------------- | ------- |
| Walkthrough before coding    | Search  |
| Navigator agrees on approach | Plan    |
| Navigator tracks progress    | Account |
| Switching seats to review    | Review  |

The underlying principle is the same in both cases: **two perspectives on the same problem produce better results than one.** SPAR is what that looks like when one of the two people doesn't have persistent memory, can't sense when it's going off the rails, and needs the human to hold the context that the session can't.
