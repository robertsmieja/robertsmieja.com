---
title: "Coding with AI: The SPAR Patterns"
date: "2026-04-19"
description: "SPAR (Search, Plan, Act/Account, Review): four session-level habits for effective agentic coding, framed as pair programming with an AI partner."
tags: ["ai", "agents", "pair-programming", "workflow"]
---

> **Note:** If you know of any prior art in this space, I'd love to hear about it. I wasn't able to find existing terminology for these workflows.

"Agentic Engineering" is the new hot buzzword, but when I first encountered it, it felt familiar in a way I had trouble articulating. A few months later, I realized that steering an agent like Claude Code wasn't so different from steering in pair programming, and I'm apparently [not alone in this conclusion](https://ayende.com/blog/203939-C/agents-code-reviews-and-the-bottleneck-shift-oh-my)[^1].

[Pair programming](https://en.wikipedia.org/wiki/Pair_programming)[^2] is built on an asymmetric division of labor: one person **drives** (writes the code) and one **navigates** (holds context, spots mistakes, keeps the big picture). Switching roles deliberately is what makes the practice work. Two people on the same problem [catch more bugs, make better decisions, and stay more focused](https://martinfowler.com/articles/on-pair-programming.html#Benefits) than one person working alone.[^3]

Teams vary how they divide and rotate these roles: some switch on a timer, some alternate through test/implement cycles (ping-pong), some keep one person navigating for longer stretches. The details differ, but the underlying structure - one person executing, one thinking ahead - stays the same.[^4]

Coding with an AI agent is pair programming with a particular kind of partner. The agent can write and read code faster than any human, and it understands a staggering breadth of concepts and patterns, but it has no persistent memory, and no ability to sense when it's drifting off course. Our job as the human half is to play to those strengths while compensating for those shortcomings.

In a field moving faster than almost any other, this is the workflow I've settled on when approaching a software engineering task with an agent.

SPAR: **Search, Plan, Act/Account, Review.**
- **Search**: Ask your agent to map the relevant parts of the codebase before making any changes. Alternatively, ask it to interview you based on your prompt to gather whatever context it needs.
- **Plan**: Have your agent write an explicit plan before executing anything, preferably saved to disk (e.g., `PLAN.md`) in case the session crashes or drifts.
- **Act/Account**: Maintain a running log of what's been done and what remains (e.g., `PROGRESS.md`). This externalizes the session state, allowing you to "start fresh" with a new conversation when the current one gets sludgy.
- **Review**: After implementation, ask the agent to review its own work against your repository's best practices, CI checks, and linting. If you can, use a different model for the review than the one that wrote the code.

I like this acronym because it reinforces the idea that we should be actively *sparring* with our agents, asking them to explain code we don't understand, asking why they chose a particular approach. It's all too easy to blindly trust that your agent knows what it's doing.

(Complaints about the acronym and the pun can be directed to Claude.)


---

## The Four Patterns

### Search
*Read the codebase before touching it.*

Before asking the agent to make any changes, have it search and map the relevant parts of the codebase first. The agent reads key files, summarizes structure, identifies dependencies, and surfaces anything that might matter for the task ahead.

This is the walkthrough you do with a new pairing partner before sitting down to write code. You wouldn't hand someone a keyboard in an unfamiliar repo and say "fix it"; you'd show them around first.

Skipping Search is the most common cause of confident-sounding but wrong agent output. The agent fills gaps in its understanding with plausible-sounding assumptions (aka hallucinations), and those assumptions compound. The more unfamiliar the codebase, the more dangerous this gets.

---

### Plan
*Agree on the approach before writing any code.*

Have the agent produce an explicit written plan (which files to touch, what changes to make, in what order) and then **stop and wait for your review** before executing anything. You're the Navigator; the plan is the route you both agree on before the Driver starts moving.

The critical ingredient is the **human gate** between plan and action. Use this gate to verify:
- What commands will the agent run?
- What files will it touch?
- How will it validate its changes?

The written artifact (a `PLAN.md`, a checklist, an explicit "ready to proceed?") is what makes the gate real. This is also where you catch misunderstandings cheaply. A wrong assumption in the plan costs you a few seconds to correct. The same assumption baked into three files of generated code costs you much more.

---

### Act/Account
*Keep a running record of where you are.*

For tasks spanning many steps, have the agent maintain a running checklist: a TODO file, a progress log, or a `PROGRESS.md`. As each step finishes, it gets checked off. **This turns ephemeral session context into durable state.**

Without this, long agentic sessions "drift." The agent loses track of earlier decisions, revisits already-solved problems, or contradicts work it did twenty minutes ago. A running account gives both parties a shared source of truth—**like the Navigator keeping notes during a long pairing session.**

More importantly, **it allows you to start fresh often.** AI agents are at their sharpest in the first few turns of a conversation. Once a session becomes "sludgy" with long history, you can kill it, start a brand-new session, and feed it the existing `PLAN.md` and `PROGRESS.md`. The agent is instantly back to 100% sharpness, anchored by the state saved on disk.

(Since these are transient artifacts, you don't need to commit them to your project history. Keep them in a `.gitignore`'d directory, an adjacent sidecar repository, or a temporary folder.)

---

### Review
*Audit the diff before you ship it.*

After the agent produces changes, feed the diff to a fresh agent session (or step back and review it yourself) before committing. Ask for an explicit audit: bugs, unintended side effects, deviation from the original plan, anything that smells wrong.

This is the pair programming habit of **switching seats**: the person who wrote the code is too close to it. A fresh perspective catches what the author glosses over. With an agent, this is even more important: the agent that wrote the code has been locked in a single thread of reasoning the whole time, and fresh-session eyes break that tunnel vision.

If you can, use a **different model** for the review than the one that wrote the code. Often, a "reasoning-heavy" model can spot logic errors that a faster "code-generation" model might have overlooked. But even the same model in a fresh session is a massive upgrade over silent acceptance.

In practice, `git diff | ai review` (using your favorite CLI tool) is one of the highest-leverage habits in agentic engineering.

---

## SPAR as a Session Lifecycle

The four patterns map onto the natural shape of a working session:

```
Search  →  Plan  →  [Act + Account]  →  Review
             ↑                            |
             └────────────────────────────┘
```

You won't always need all four. A small task in familiar code might go straight to Plan. A quick bug fix might skip Search and end with a lightweight Review. The point is to recognize which pattern the moment calls for, and reach for it deliberately.

---

## The Pair Programming Parallel

| Pair Programming | SPAR |
|---|---|
| Walkthrough before coding | Search |
| Navigator agrees on approach | Plan |
| Navigator tracks progress | Act/Account |
| Switching seats to review | Review |

The underlying principle is the same in both cases: **two perspectives on the same problem produce better results than one.** SPAR is what that looks like when one of the two people doesn't have persistent memory, can't sense when it's going off the rails, and needs the human to hold the context that the session can't.

[^1]: Ayende Rahien, [Agents, Code Reviews, and the Bottleneck Shift, Oh My](https://ayende.com/blog/203939-C/agents-code-reviews-and-the-bottleneck-shift-oh-my)
[^2]: Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming)
[^3]: Martin Fowler, [On Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)
[^4]: Martin Fowler, [On Pair Programming: Styles](https://martinfowler.com/articles/on-pair-programming.html#Styles)
