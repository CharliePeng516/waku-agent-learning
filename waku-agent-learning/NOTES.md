# Notes

## Learner profile
- Senior-enough SWE: TypeScript, React/Next.js, REST APIs, backend integration,
  databases. No Python-fundamentals teaching needed — call out Python-specific gotchas
  only when they'd trip up a TS developer (e.g. `dataclass`, `SimpleNamespace`, sync I/O
  patterns), don't explain basic syntax.
- No prior LLM API / prompting / RAG / agent experience disclosed yet — treat as a
  true beginner on the domain, expert on the engineering.

## Language
- Learner reads Chinese and wants a 中文 version of lessons too. Ship each lesson (and
  the reference docs it links) as a pair: `NNNN-slug.html` (English) and
  `NNNN-slug.zh.html` (Simplified Chinese), cross-linked at the top of each. Keep code,
  identifiers, and field names in English in both versions — only prose is translated.
  Established with lesson 1 on 2026-08-17.

## Preferences (stated 2026-08-17)
- One concept at a time. Ask comprehension-check questions before moving on.
- Give small coding exercises, not lectures. Never hand over the full solution first —
  review the learner's attempt, then discuss.
- Always connect each technique to "why and when you'd reach for this" in real
  engineering terms.
- Avoid ML theory/math unless strictly needed to understand application behavior.
- Ground everything in `waku-agent` (this repo) where possible: point at the real
  file/line, ask the learner to read it, ask why it's designed that way, then give a
  small change to implement themselves.

## Curriculum roadmap (fixed order, do not reorder without asking)
1. LLM API fundamentals — not started
2. Prompt and context engineering — not started
3. Structured output — not started
4. Tool / function calling — not started
5. RAG — not started
6. AI workflows — not started
7. AI agents and agent loops — not started
8. Evaluation / LLM-as-a-judge — not started
9. Multimodal applications — not started
10. Production concerns (observability, cost, retries, security, latency) — not started

Update the status marker per module as sessions progress (not started / in progress /
done — lesson NNNN). Each of the 10 modules may span more than one lesson file if a
single sitting isn't enough — keep this list pointing at the current lesson number.

## Codebase anchors worth returning to (waku-agent, Python)
- `waku/loop/agent.py` — the whole agent loop in ~100 lines. Module 1 (raw API call),
  module 4 (tool calling), module 7 (agent loop + guardrails) all live here.
- `waku/loop/models.py` — provider abstraction, two wire formats (Anthropic native,
  OpenAI-compatible adapter `OpenAICompatClient`). Module 1's "what is actually on the
  wire" comparison.
- `waku/runtime/session.py` — working memory assembly (SOUL.md + memory + history).
  Module 2 (context engineering).
- `waku/tools/` — `create_event` / `save_note` / `send_message`, `waku/tools/registry.py`
  — module 4 (tool schemas, execution, results).
- `waku/memory/retrieval_gate.py`, `waku/memory/consolidation.py` — module 5 (RAG-ish
  retrieval) and module 2 (context budget decisions).
- `waku/graph/` — opt-in structure around the loop, workflows/triage — module 6
  (workflows) and the workflow-vs-agent distinction from module 7.
- `evals/deterministic/` vs `evals/judge/` — module 8, and the repo's own hard rule to
  never mix the two.
- `waku/ops/tracing.py`, dashboard (localhost:7777) — module 10 (observability).

## Session log
- 2026-08-17: Workspace created. Mission, resources, and roadmap established. Learner
  disclosed prior SWE background (see `learning-records/0001-prior-swe-background.md`).
  Next: assess baseline LLM-API knowledge, then start module 1 (LLM API fundamentals)
  grounded in `waku/loop/agent.py` and `waku/loop/models.py`.
