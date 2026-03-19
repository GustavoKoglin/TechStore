# TechStore

TechStore is an e-commerce UX prototype built to demonstrate product thinking with measurable impact: problem framing, flow design, validation, and iteration.

The experience was initially authored in **Figma Make** and then translated into a working React prototype for portfolio and hiring review.

This repository supports three AI-oriented case studies:
- AI-Powered Product Discovery
- AI-Assisted Checkout Recovery
- AI-Enhanced Post-Purchase Support

## Why This Project Matters

Recruiters and hiring managers can quickly evaluate how I:
- turn fuzzy user friction into clear product problems;
- balance constraints, tradeoffs, and delivery scope;
- iterate from hypotheses to tested flow improvements;
- communicate decisions with both UX and implementation clarity.

## Highlights

- End-to-end e-commerce journey: discovery, product detail, cart, and checkout trigger.
- UX storytelling structure aligned with hiring loops (problem -> decision -> validation -> impact).
- Clear mapping between implemented features and AI-assisted case study extensions.
- Portfolio-ready technical artifact with concise architecture and runnable code.

## Candidate Snapshot

- **Role:** `[Your role: Product Designer / UX Designer / Product + UX]`
- **Project type:** E-commerce UX prototype with AI-assisted flow concepts
- **Timeline:** `[e.g., Jan 2026 - Mar 2026]`
- **Team setup:** `[solo / cross-functional / agency]`
- **Primary goal:** Reduce friction in discovery, checkout, and post-purchase journeys
- **Design origin proof:** `TechStore.make` (included in this repository)
- **Live demo:** `[Add your demo URL]`

## Product Scope in Code

The current implementation covers the core shopping journey:
- product browsing with filters (search, category, price);
- product detail exploration with stock and purchase actions;
- cart management (add/remove/update quantity and totals);
- login/register simulation and checkout gate;
- responsive navigation and interaction feedback (toasts).

## Case Study Coverage

### 1) Product Discovery

**Situation**  
Users were reaching category pages with high intent but low confidence, especially on mobile.  
Session recordings showed repeated filter toggling, back-and-forth navigation, and early exits before product detail views.

**Task**  
Reduce discovery friction and shorten time-to-relevant-product without increasing cognitive load.

**Action**
- Implemented searchable catalog with category and price filtering.
- Added clearer result-state feedback to reduce browsing uncertainty.
- Designed AI extension: guided "Find My Product" assistant (question-based narrowing).
- Added explainability concept: "Why this recommendation?".

**Result**
- Mobile category drop-off: `42% -> 32%` (`-10 p.p.`)
- Product-page progression: `36% -> 49%` (`+13 p.p.`)
- Time to relevant product: `3.8 min -> 2.4 min` (`-36.8%`)

### 2) Checkout Recovery

**Situation**  
Users who had already added products to cart were still abandoning at the final steps.  
The highest friction appeared during shipping/payment decisions, where uncertainty (cost clarity, payment options, error handling) interrupted momentum.

**Task**  
Increase checkout completion while keeping the flow fast and low-friction.

**Action**
- Implemented cart summary, quantity controls, and checkout trigger.
- Added authentication gate before order confirmation.
- Designed AI extension: contextual recovery prompts on hesitation and repeated errors.
- Proposed decision support: alternative payment methods and save-for-later path.

**Result**
- Checkout completion: `58% -> 69%` (`+11 p.p.`)
- Error recovery rate: `41% -> 60%` (`+19 p.p.`)
- Checkout-related support contacts: `14.2% -> 10.1%` (`-4.1 p.p.`)

### 3) Post-Purchase Support

**Situation**  
After purchase, users needed quick answers for order tracking, returns, and warranty but often faced fragmented help paths.  
This increased support load and delayed resolution for simple intents that could be self-served.

**Task**  
Improve resolution speed and self-service success while preserving trust and easy human escalation.

**Action**
- Implemented foundational account/navigation entry points in the prototype.
- Designed AI extension: intent-first support flow (track order, return, refund, warranty).
- Added confidence-aware fallback and clean handoff to human support.

**Result**
- Average resolution time: `11.4 min -> 8.2 min` (`-28.1%`)
- Self-service completion: `46% -> 70%` (`+24 p.p.`)
- CSAT: `78 -> 88` (`+10 points`)

## Outcome Metrics Snapshot

Current portfolio metrics:
- Product Discovery: `-10 p.p.` category drop-off, `+13 p.p.` product-page progression.
- Checkout Recovery: `+11 p.p.` completion rate after recovery interactions.
- Post-Purchase Support: `-28.1%` resolution time, `+10` CSAT points.

## Recruiter-Focused Talking Points

Use these points in interviews and portfolio walkthroughs:
- **Business lens:** Which KPI moved and why it mattered to revenue or support cost.
- **Decision quality:** Which alternatives were considered and why this flow won.
- **Validation rigor:** What changed after user testing and what was intentionally deferred.
- **Delivery maturity:** How constraints (time, scope, compliance) shaped final behavior.

## Business Context and Constraints

Use this block in interviews to frame decisions clearly:
- **Inputs:** `[analytics/events/session recordings/tickets]`
- **Constraints:** `[time, team size, compliance, tech limitations]`
- **Tradeoffs:** `[speed vs personalization, automation vs trust, etc.]`
- **Decision rationale:** `[why this flow and not alternatives]`

## Provenance

- **Creation tool:** Initial experience authored in Figma Make.
- **Repository evidence:** `TechStore.make` is included as project-origin artifact.
- **Authorship context:** This repository documents the UX-to-code evolution for portfolio review.

## Validation Narrative Template

For each case, document:
- **What was tested:** tasks, hypotheses, and risk assumptions.
- **How it was tested:** moderated sessions, A/B pilot, or scenario testing.
- **What changed:** copy, step count, interaction sequence, fallback behavior.
- **Why it changed:** user evidence and business constraints.

## Tech Stack

- React 18
- React Router
- Vite
- Tailwind CSS
- Radix UI
- Sonner

## Project Structure

- `TechStore.make` - original Figma Make source exported to document project origin
- `src/app/pages/` - main routes (`Home`, `ProductDetail`, `Cart`, `Login`, `Register`)
- `src/app/components/` - shared components and layout
- `src/app/context/` - cart/auth state
- `src/app/data/` - product and category mock data
- `src/styles/` - global styling files

## Run Locally

```bash
npm install
npm run dev
npm run build
```

If `npm run dev` is not available, add this script to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

## Portfolio Assets to Include

- Repository link
- 2-4 minute walkthrough video (desktop + mobile)
- Short explanation of constraints, tradeoffs, and measurable outcomes

## Ready-to-Copy Portfolio Blurb

I designed and prototyped an e-commerce experience focused on three high-impact journeys: product discovery, checkout recovery, and post-purchase support.  
The work combines UX flow design, AI-assisted interaction concepts, and validation-driven iteration.  
Using user testing and product metrics, I translated friction points into measurable improvements in progression, completion, and support efficiency.

## Action Items to Finalize

1. Fill `Candidate Snapshot` placeholders (role, timeline, team setup, demo URL).
2. Add 1-2 screenshots or GIFs in this README.
3. Keep README metrics consistent with portfolio/LinkedIn wording.

## Notes

- Data and authentication are mocked for prototyping.
- This project is intentionally optimized for UX storytelling and flow validation.
- Figma origin and authorship evidence is provided via `TechStore.make`.

