# LLM Application Development — Resources

## Knowledge

### 1. LLM API fundamentals
- [Claude Platform Docs — Messages API](https://platform.claude.com/docs)
  Anthropic's own reference for the request/response shape the whole `waku-agent` loop
  is built on (system/messages/tools in, content blocks out). Use for: exact field
  semantics, streaming, token usage accounting.
- [OpenAI API Docs](https://developers.openai.com/api/docs)
  The other major wire format (`chat.completions` / `responses`). Use for: comparing
  against Anthropic's shape, understanding why `waku/loop/models.py` needs an adapter.

### 2. Prompt and context engineering
- [Anthropic — Prompt engineering best practices](https://claude.com/blog/best-practices-for-prompt-engineering)
  Official current guidance; also covers the "prompt → context engineering" framing.
  Use for: system prompt structure, few-shot technique, when to stop hand-tuning wording.
- [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
  Treats the whole context window (system prompt, tools, history, retrieved data) as the
  budget to manage, not just the instruction text. Use for: understanding
  `waku/runtime/session.py`'s working-memory assembly and `waku/memory/retrieval_gate.py`.

### 3. Structured output
- [OpenAI — Structured model outputs](https://developers.openai.com/api/docs/guides/structured-outputs)
  Canonical explanation of schema-constrained JSON output vs plain "JSON mode." Use for:
  when schema adherence is guaranteed vs merely encouraged, streaming structured output.
- [Claude Platform Docs — Tool use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
  Anthropic's structured-output idiom is a tool call with no execution — same
  content-block mechanics used for real tools. Use for: seeing structured output and
  tool calling as one mechanism, not two.

### 4. Tool / function calling
- [Claude Platform Docs — Tool use overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
  Request/response mechanics: `tool_use` blocks, `tool_result` blocks, client vs server
  tools. Use for: grounding `waku/tools/registry.py` and the loop's tool-call branch.
- [Claude Platform Docs — Programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)
  Newer pattern where the model writes code that calls tools instead of one call per
  turn. Use for: token-cost tradeoffs at scale, once the basic loop is second nature.

### 5. RAG
- [Anthropic — Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
  Explains why naive chunking loses context and the fix (contextual embeddings +
  contextual BM25), with measured failure-rate improvements. Use for: understanding RAG
  failure modes before building a toy pipeline, and for `waku/memory/`'s FTS5 approach.
- [Claude Cookbook — Contextual embeddings guide](https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide)
  Runnable reference implementation. Use for: a concrete "chunk → embed → retrieve"
  pipeline to compare against once you've built your own.

### 6 & 7. AI workflows, agents, and agent loops
- [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
  THE canonical source for the workflow-vs-agent distinction (predefined code paths vs
  the model directing its own tool use) and the named workflow patterns (prompt
  chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer). Use
  for: topics 6 and 7 both, and for understanding why `waku/graph/` exists as an
  opt-in structure "around" the loop rather than replacing it.

### 8. Evaluation / LLM-as-a-judge
- [DeepEval docs](https://deepeval.com/docs/getting-started)
  The library `waku-agent`'s `evals/judge/` is built on (G-Eval and other LLM-judge
  metrics). Use for: how to write a scored eval, not just a pass/fail one.
- Anthropic and OpenAI both publish LLM-as-judge guidance inside their broader safety /
  evals material (no single canonical doc found — search each platform's docs site for
  "evals" when you reach this module). **Gap, see below.**

### 9. Multimodal applications
- [Claude Platform Docs — Vision](https://platform.claude.com/docs/en/build-with-claude/vision)
  Image input mechanics: base64/URL blocks, multi-image requests, resolution limits.
  Use for: the concrete request shape before wiring up a multimodal tool or gateway.

### 10. Production concerns
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  The security half of this module — prompt injection, excessive agency, improper
  output handling, supply chain. Use for: threat-modeling any tool you give an LLM
  write/execute access to (directly relevant to `waku/tools/`).
- [OpenTelemetry — GenAI semantic conventions](https://opentelemetry.io/blog/2026/genai-observability/)
  The emerging standard vocabulary (`gen_ai.*` attributes) for tracing LLM calls: model,
  tokens, cost, tool/agent spans. Use for: comparing against `waku/ops/tracing.py`'s
  JSONL + OTel approach.

## Wisdom (Communities)

- [Latent Space Discord](https://www.latent.space/) (via the Latent Space newsletter/podcast site)
  Practitioner-focused LLM application engineering community with channels for agents,
  evals, and RAG specifically — closest match to this mission's scope. Use for: current
  best practices, "what actually works in production" discussion.
- [OpenAI Developer Community forum](https://community.openai.com/)
  Active threads on function calling, structured outputs, RAG, and production patterns.
  Use for: provider-specific gotchas and error-message troubleshooting.

No opt-out on communities has been stated yet — ask before assuming.

## Gaps
- No single canonical "how to build an LLM-as-a-judge eval" doc from a primary lab was
  found; module 8 will lean on the DeepEval docs plus this repo's own
  `evals/judge/` implementation as the primary source, backed by general practitioner
  writeups. Revisit this when reaching module 8 — worth a fresh, targeted search then.
- No dedicated resource picked yet for module 10's cost/retry engineering specifically
  (as opposed to security/observability) — revisit when reaching that module.
