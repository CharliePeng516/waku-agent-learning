# Mission: LLM Application Development (Software Engineer's Track)

## Why
You already build real software (TypeScript, React/Next.js, REST APIs, backend
integration, databases). You want to bring that same engineering rigor to LLM-powered
features — building with existing model APIs, not training or fine-tuning models —
so you can design, ship, and operate real AI applications the way you'd ship any other
production backend system.

## Success looks like
- Explain and correctly use the request/response shape of an LLM API (messages, system
  prompt, tools, usage/tokens) for at least two providers, without copy-pasting from docs.
- Design a prompt/context strategy for a given task and justify the tradeoffs (system
  prompt vs few-shot vs retrieved context vs long conversation history).
- Implement structured output extraction (schema-constrained JSON) and know when to
  reach for it instead of free text.
- Implement a tool/function-calling loop from scratch and explain each guardrail in it.
- Build a basic RAG pipeline (chunk → embed → retrieve → use) and name its common
  failure modes.
- Distinguish a "workflow" from an "agent" and justify which one fits a given task.
- Build a small agent loop with iteration limits and explain why the limits exist.
- Write both a deterministic eval and an LLM-as-judge eval for an LLM feature, and know
  when each is the right tool.
- Build a small multimodal (image/PDF) feature using an LLM API.
- Reason about production concerns for an LLM feature — observability, cost/token
  budgeting, retries, prompt-injection/security, latency/streaming — with the same
  fluency you'd bring to a normal backend service review.

## Constraints
- Strong prior SWE background (TS, React/Next.js, REST, backend, DBs) — do not re-teach
  general software engineering.
- No deep ML math or foundation-model training content. Only as much ML theory as is
  needed to reason about behavior (e.g. context windows, tokens) — never more.
- Curriculum order is fixed by the learner, do not reorder without asking:
  1. LLM API fundamentals
  2. Prompt and context engineering
  3. Structured output
  4. Tool / function calling
  5. RAG
  6. AI workflows
  7. AI agents and agent loops
  8. Evaluation / LLM-as-a-judge
  9. Multimodal applications
  10. Production concerns (observability, cost, retries, security, latency)
- Teaching style: one concept at a time, comprehension-check questions, small coding
  exercises (never hand over the full solution first), always connect to real
  engineering "why/when," review the learner's own attempt afterward rather than
  writing it for them.
- Primary teaching project: `waku-agent` (this repo's Python codebase) — inspect real
  implementations, don't just read theory. The repo is Python; the learner is TS-native
  but experienced enough not to need Python fundamentals taught.

## Out of scope
- Training or fine-tuning foundation models.
- Transformer/attention internals, backprop, or other deep ML theory not needed to use
  an LLM API correctly.
- Framework tourism (LangChain/LlamaIndex/etc. survey) unless it becomes directly useful
  — the mission is understanding the underlying mechanics via direct API use and this
  repo's hand-rolled implementations, not framework fluency.
