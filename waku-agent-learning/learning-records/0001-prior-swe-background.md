# Prior SWE background established; zero prior LLM API experience

The learner has strong professional software engineering experience — TypeScript,
React/Next.js, REST APIs, backend integration, databases — and explicitly does not want
foundation-model training or deep ML math. They have not disclosed any prior hands-on
experience with LLM APIs, prompting, RAG, or agents, so module 1 should start at true
zero on the domain (no assumed familiarity with tokens, context windows, system
prompts, or tool calling) while assuming full fluency with general backend/API
engineering concepts (request/response cycles, schemas, retries, auth, observability).

## Evidence
Stated directly at workspace setup: "I already know TypeScript, React/Next.js, REST
APIs, backend integration, databases, and normal software engineering... I do not want
to focus on training foundation models or deep ML mathematics."

## Implications
- Skip all general SWE scaffolding (what's a REST call, what's JSON, etc.) — jump
  straight into what's LLM-specific about each topic.
- When comparing an LLM API concept to something familiar, backend/API analogies will
  land better than frontend ones (their backend/DB experience is explicitly named).
- Exercises can be written in Python (the teaching repo's language) without a
  Python-onboarding step — they're experienced enough to read/write Python from
  context, just flag idioms that are non-obvious even to an experienced dev in another
  language.
