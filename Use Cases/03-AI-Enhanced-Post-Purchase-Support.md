# 03) AI-Enhanced Post-Purchase Support

## Executive Summary
After purchase, users needed fast answers for tracking, returns, refunds, and warranty. Existing help paths were fragmented and increased resolution time for simple intents.

This use case introduced an AI-augmented support model with intent-first routing, confidence-aware fallback, and human handoff to improve speed and trust.

## Story and Narrative
A customer wants to track an order and later ask about a return. Instead of one guided support path, they jump across pages, FAQ links, and contact options. What should be a 2-minute answer becomes a 10-minute task.

The objective became: "resolve first intent quickly, then escalate cleanly if needed".

## Problem Framing
- Primary problem: Fragmented post-purchase journeys for common intents.
- User pain: Slow answers and unclear escalation routes.
- Business impact: Higher support volume and lower satisfaction.

## Target User Outcomes
- Resolve simple intents in one guided flow.
- Escalate to human support without repeating context.
- Trust support outcomes and next steps.

## Solution Design
### UX Solution
- Intent-first support entry points: tracking, return, refund, warranty.
- AI extension concept: classify user intent and route to best flow instantly.
- Confidence-aware fallback: if low confidence, move to assisted path.
- Human handoff with context continuity to reduce repetition.

### Engineering Translation
- Support flow structured as explicit intent states.
- Reusable page-level patterns for support actions and confirmations.
- Modular architecture for swapping mock logic with backend ticketing integrations.
- Event instrumentation ready for self-service and escalation tracking.

### AI-Assisted Workflow
- Used AI to accelerate support intent taxonomy and flow variants.
- Rapidly generated multiple support conversation structures.
- Manually validated and refined escalation logic for trust and clarity.

## Bottleneck Prevention
- Reduced path fragmentation with a single intent-entry model.
- Prevented support loopbacks by exposing clear next actions.
- Designed confidence thresholds to avoid false automation certainty.
- Kept human handoff pathway explicit to avoid unresolved dead ends.

## Security and Vulnerability Safeguards
- Kept sensitive order/account actions behind authenticated flows.
- Avoided exposing private order details in public navigation states.
- Designed escalation with least-necessary context transfer.
- Prevented over-automation risk by adding confidence-based guardrails.

## Validation
- Conducted lightweight usability scenarios on post-purchase tasks.
- Measured confusion points across tracking, returns, and warranty tasks.
- Iterated support labels and escalation transitions from observed drop-offs.

## Outcome Metrics
- Average resolution time: `11.4 min -> 8.2 min` (`-28.1%`)
- Self-service completion: `46% -> 70%` (`+24 p.p.`)
- CSAT: `78 -> 88` (`+10 points`)

## Tradeoffs
- Prioritized clear intent routing over open-ended conversational flexibility.
- Deliberately constrained automation where confidence could harm trust.
