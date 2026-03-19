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

**Implemented now**
- Home listing with search, category, and price filters.
- Clear result-state feedback to reduce browsing friction.

**AI extension in case study**
- Guided "Find My Product" assistant.
- Explainable recommendation logic ("Why this recommendation?").

**Validated impact (replace with real numbers)**
- Mobile category drop-off: `[Before]% -> [After]%` (`[Delta]%`)
- Product-page progression: `[Before]% -> [After]%`
- Time to relevant product: `[Before] min -> [After] min`

### 2) Checkout Recovery

**Implemented now**
- Cart summary and checkout trigger.
- Authentication step before order confirmation.

**AI extension in case study**
- Contextual recovery prompts on hesitation/errors.
- Alternative payment and save-for-later decision support.

**Validated impact (replace with real numbers)**
- Checkout completion: `[Before]% -> [After]%`
- Error recovery rate: `[Before]% -> [After]%`
- Checkout-related support contacts: `[Before] -> [After]`

### 3) Post-Purchase Support

**Implemented now**
- Foundational account/navigation entry points.

**AI extension in case study**
- Intent-first support flow (track order, return, refund, warranty).
- Confidence-aware fallback to human support.

**Validated impact (replace with real numbers)**
- Average resolution time: `[Before] -> [After]`
- Self-service completion: `[Before]% -> [After]%`
- CSAT: `[Before] -> [After]`

## Outcome Metrics Template (Replace With Real Data)

Use this format in portfolio presentations:
- Product Discovery: `-XX%` category drop-off, `+YY%` product-page progression.
- Checkout Recovery: `+XX%` completion rate after recovery interactions.
- Post-Purchase Support: `-XX%` resolution time, `+YY` CSAT points.

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

1. Replace all `[ ... ]` placeholders with real project data.
2. Add your repo URL and a short walkthrough video URL.
3. Add 1-2 screenshots or GIFs in this README.
4. Keep metrics consistent with your portfolio/LinkedIn wording.

## Notes

- Data and authentication are mocked for prototyping.
- This project is intentionally optimized for UX storytelling and flow validation.
- Figma origin and authorship evidence is provided via `TechStore.make`.

