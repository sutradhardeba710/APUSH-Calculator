# Detailed Functional & Technical Requirements

## APUSH Score Calculator

**Document version:** 1.0
**Status:** Implementation-ready
**Primary objective:** Build a fast, transparent, mobile-first AP U.S. History score calculator that calculates a weighted composite and provides an explicitly estimated AP score.

---

# 1. Product Scope

The application must provide four levels of functionality:

**Level 1 — Basic Calculator**
User enters scores → calculator returns weighted composite and estimated AP score.

**Level 2 — Score Analysis**
User sees section percentages, weighted contributions, strengths, weaknesses, and score interpretation.

**Level 3 — Score Planning**
User can simulate different results and calculate what improvement may be needed to reach a target score.

**Level 4 — Supporting APUSH Tools**
DBQ, LEQ, and SAQ calculators can calculate section scores and pass those scores into the main calculator.

---

# 2. Required Pages

## 2.1 Main Calculator

Required URL:

`/apush-score-calculator/`

Must contain:

* Header
* Breadcrumb
* H1
* Short introduction
* Calculator
* Result section
* Detailed breakdown
* What-if simulator
* Target score section
* Methodology
* FAQ
* Sources
* Footer

---

## 2.2 APUSH Score Predictor

URL:

`/apush-score-predictor/`

Purpose:

Target users searching specifically for an APUSH score prediction.

The calculator can reuse the same scoring engine while presenting slightly different introductory content.

---

## 2.3 DBQ Calculator

URL:

`/apush-dbq-score-calculator/`

Must calculate DBQ rubric points and optionally pass the resulting score to the primary calculator.

---

## 2.4 LEQ Calculator

URL:

`/apush-leq-score-calculator/`

Must calculate LEQ rubric points and optionally pass the resulting score to the primary calculator.

---

## 2.5 SAQ Calculator

URL:

`/apush-saq-score-calculator/`

Must calculate SAQ points.

---

## 2.6 Score Distribution

URL:

`/apush-score-distribution/`

Must display historical APUSH score distributions using properly sourced data.

---

# 3. Main Calculator Requirements

## REQ-CALC-001 — Exam Year

The application must provide an exam-year selector.

Example:

```text
Exam Year
[ 2027 ▼ ]
```

Supported years must be data-driven.

The UI must not require developers to change React/component logic merely to add another exam year.

---

# 4. Multiple Choice Requirements

## REQ-MCQ-001

User must enter number of MCQ questions answered correctly.

Input:

```text
[ 42 ] / 55
```

## REQ-MCQ-002

Input must accept integers only.

Valid:

* 0
* 1
* 42
* 55

Invalid:

* -1
* 56
* 42.5
* abc

## REQ-MCQ-003

The maximum must come from exam-year configuration.

Do not hard-code `55` directly into calculation logic.

## REQ-MCQ-004

Display:

```text
MCQ Accuracy: 76.4%
```

---

# 5. SAQ Requirements

## REQ-SAQ-001

The application must allow entry of individual SAQ scores when the selected exam structure supports individual question scoring.

Example:

```text
SAQ 1    [ 2 ] / 3
SAQ 2    [ 2 ] / 3
SAQ 3    [ 1 ] / 3
```

## REQ-SAQ-002

The application must automatically calculate:

```text
Total SAQ Score
```

## REQ-SAQ-003

The maximum score must be year-configurable.

## REQ-SAQ-004

The application must display SAQ percentage.

---

# 6. DBQ Requirements

## REQ-DBQ-001

Basic input:

```text
DBQ Score
[ 5 ] / 7
```

## REQ-DBQ-002

DBQ score cannot exceed configured maximum.

## REQ-DBQ-003

The application must calculate:

```text
DBQ %
```

## REQ-DBQ-004

An optional detailed DBQ rubric calculator should be available.

---

# 7. LEQ Requirements

## REQ-LEQ-001

Basic input:

```text
LEQ Score
[ 4 ] / 6
```

## REQ-LEQ-002

LEQ score cannot exceed configured maximum.

## REQ-LEQ-003

The application must calculate:

```text
LEQ %
```

## REQ-LEQ-004

Optional detailed rubric calculator must be supported.

---

# 8. Calculation Engine Requirements

The calculation engine must be a pure, reusable module.

It must not depend on DOM elements, React components, browser storage, analytics, or styling.

Example API:

```typescript
calculateComposite({
  year: 2027,
  mcq: 42,
  saq: 5,
  dbq: 5,
  leq: 4
})
```

Expected response:

```typescript
{
  composite: number,
  sections: {
    mcq: {...},
    saq: {...},
    dbq: {...},
    leq: {...}
  }
}
```

---

# 9. Normalization Requirements

Every section must first be normalized.

Formula:

```text
sectionPercentage =
rawScore / maximumScore
```

The normalized value should internally be represented as a decimal between `0` and `1`.

Example:

```text
42 / 55 = 0.763636...
```

---

# 10. Weighting Requirements

The system must apply the selected exam year's configured weights.

Current required configuration for the primary APUSH structure:

```text
MCQ = 40%
SAQ = 20%
DBQ = 25%
LEQ = 15%
```

Total must equal:

```text
100%
```

The system must validate configuration so that weights cannot accidentally total something other than 100%.

---

# 11. Composite Formula

Required conceptual formula:

```text
MCQ contribution =
MCQ raw / MCQ max × MCQ weight

SAQ contribution =
SAQ raw / SAQ max × SAQ weight

DBQ contribution =
DBQ raw / DBQ max × DBQ weight

LEQ contribution =
LEQ raw / LEQ max × LEQ weight
```

Then:

```text
Composite =
sum(section contributions) × 100
```

---

# 12. Precision Requirements

Internally:

* Preserve full floating-point precision.

Display:

* Composite: 1 decimal place.
* Section percentages: 1 decimal place.
* Detailed calculations: optionally 2 decimals.

Do not repeatedly round intermediate values before calculating the final result.

---

# 13. Estimated AP Score Requirements

The system must include a separate prediction layer.

Architecture:

```text
Raw Scores
   ↓
Composite Calculator
   ↓
Prediction Engine
   ↓
Estimated AP Score
```

The prediction engine must not alter the composite.

---

# 14. Prediction Disclaimer

The result interface must explicitly distinguish an estimate from an official score.

Required concept:

> Estimated AP Score

Do not use:

> Official AP Score

The page must explain that actual AP score conversions can vary by exam administration and that the tool provides an estimate.

---

# 15. Prediction Model Requirements

The prediction model must be configurable by:

* Exam year
* Model version
* Threshold/range parameters
* Methodology
* Source information
* Last updated date

Example:

```json
{
  "year": 2027,
  "modelVersion": "v1",
  "method": "estimated-range",
  "parameters": {}
}
```

Do not bury prediction thresholds in UI components.

---

# 16. Result Requirements

The result must display:

### Estimated AP Score

Large visual number:

```text
4
```

### Weighted Composite

```text
69.5 / 100
```

### Estimated Range

Example:

```text
3–4
```

### Confidence

Example:

```text
Moderate
```

All three prediction fields must be independently configurable.

---

# 17. Score Breakdown Requirements

The result must show:

| Section | Raw Score | Percentage | Weight | Contribution |
| ------- | --------: | ---------: | -----: | -----------: |
| MCQ     |     42/55 |      76.4% |    40% |         30.5 |
| SAQ     |       5/9 |      55.6% |    20% |         11.1 |
| DBQ     |       5/7 |      71.4% |    25% |         17.9 |
| LEQ     |       4/6 |      66.7% |    15% |         10.0 |

The table should be responsive on mobile.

---

# 18. Performance Analysis Requirements

The system must calculate:

### Strongest section

Highest normalized percentage.

### Weakest section

Lowest normalized percentage.

### Highest improvement opportunity

The section where additional raw points produce meaningful composite improvement.

The system should not simply assume that the weakest percentage is always the highest-value improvement opportunity.

---

# 19. Target Score Requirements

User selects:

```text
Target
[ 5 ▼ ]
```

The system must compare:

```text
Current composite
vs.
Estimated target range
```

It must calculate the approximate remaining improvement required.

---

# 20. Improvement Scenario Engine

The system must support “what would happen if…” scenarios.

Examples:

```text
+1 MCQ
+2 MCQ
+1 SAQ
+1 DBQ
+1 LEQ
```

For each scenario:

* Recalculate composite.
* Recalculate estimated AP score.
* Show difference from current state.

---

# 21. Best-Path Recommendation

The system should identify combinations of improvements that could move the user toward a target.

Example:

```text
Scenario A
+4 MCQ

Scenario B
+2 MCQ + 1 SAQ

Scenario C
+1 DBQ
```

Scenario ranking must be mathematically generated.

---

# 22. What-If Simulator

Requirements:

* Inputs must remain synchronized with the main calculator state.
* Changes must update results immediately.
* No page reload.
* No API call required for basic calculation.
* Simulator must use the exact same scoring engine as the primary calculator.

This prevents discrepancies between:

**Main Calculator**

and

**What-If Calculator**

---

# 23. Reset Requirements

A Reset button must:

* Clear all user-entered values.
* Reset result.
* Return calculator to empty/default state.
* Preserve the selected default exam year where appropriate.

No browser refresh should be required.

---

# 24. URL State Requirements

The calculator should support shareable state.

Example:

```text
/apush-score-calculator/?year=2027&mcq=42&saq=5&dbq=5&leq=4
```

On load, the application must:

1. Parse parameters.
2. Validate parameters.
3. Ignore invalid values safely.
4. Populate the calculator.
5. Calculate only valid state.

---

# 25. Mobile Requirements

The main calculator must be fully usable on mobile.

Minimum requirements:

* Large touch targets.
* Numeric input optimized for mobile keyboards.
* No horizontal scrolling.
* Result visible without excessive scrolling.
* Sticky Calculate/Result behavior may be used carefully.
* Tables convert to cards or scroll containers where necessary.

---

# 26. Accessibility Requirements

Target:

**WCAG 2.2 AA**

Required:

* Proper `<label>` for every input.
* Keyboard navigation.
* Accessible focus indicators.
* Semantic heading hierarchy.
* Accessible form errors.
* No color-only meaning.
* Screen-reader-compatible dynamic result updates.
* Proper button labels.
* Accessible charts/data tables.

---

# 27. Loading Requirements

Basic calculator functionality should not depend on network requests.

Required behavior:

```text
Page loads
↓
Calculator available
↓
User enters data
↓
Calculation happens locally
```

External data should only be required for non-essential content.

---

# 28. Error Handling Requirements

Invalid score:

```text
MCQ score cannot be greater than 55.
```

Missing required score:

```text
Enter your MCQ score.
```

Malformed URL:

```text
Invalid calculator values were ignored.
```

The application must never display `NaN`, `Infinity`, undefined values, or broken score calculations.

---

# 29. Data Configuration Requirements

Create a dedicated configuration layer.

Example:

```typescript
interface ExamConfiguration {
  year: number;
  sections: SectionConfiguration[];
  predictionModelVersion: string;
  sources: SourceReference[];
}
```

Section:

```typescript
interface SectionConfiguration {
  id: "mcq" | "saq" | "dbq" | "leq";
  label: string;
  maxScore: number;
  weight: number;
}
```

---

# 30. Source Requirements

Every year-specific scoring configuration must have source metadata.

Minimum:

```text
Publisher
Title
URL
Publication/update date when available
Access date
```

The UI should provide a clear source/methodology section.

---

# 31. Exam-Year Versioning Requirements

A future APUSH format change must be handled through configuration.

For example:

```text
2026
  ↓
Configuration A

2027
  ↓
Configuration B
```

The application must not assume that every year's:

* number of questions,
* maximum raw score,
* rubric,
* weighting,
* scoring methodology

is identical.

---

# 32. DBQ Detailed Rubric Requirements

The DBQ tool must have configurable criteria.

Conceptually:

```text
Thesis / Claim
Contextualization
Document Evidence
Outside Evidence
Sourcing / Analysis
Complex Understanding
```

The rubric engine must support:

* Criterion status.
* Points awarded.
* Maximum points.
* Explanatory text.
* Year-specific changes.

The final DBQ score must feed the main calculator.

---

# 33. LEQ Detailed Rubric Requirements

Configurable criteria:

```text
Thesis / Claim
Contextualization
Evidence
Analysis and Reasoning
Complex Understanding
```

The final LEQ score must feed the main calculator.

---

# 34. FAQ Requirements

At least these questions should be addressed:

* How is APUSH scored?
* How is the APUSH composite score calculated?
* How much is the APUSH multiple-choice section worth?
* How much is the DBQ worth?
* How much is the LEQ worth?
* How much are SAQs worth?
* What score do I need for a 5?
* Is this APUSH calculator accurate?
* Is this an official College Board calculator?
* Can I use this calculator for older APUSH exams?

Answers should be factual, concise, and tied to authoritative sources where appropriate.

---

# 35. SEO Technical Requirements

Main page must include:

* One H1.
* Unique title.
* Unique meta description.
* Canonical URL.
* Open Graph metadata.
* Twitter/X metadata where appropriate.
* Robots directives.
* XML sitemap inclusion.
* Crawlable text content.
* Internal links.

---

# 36. Structured Data Requirements

Where valid and appropriate, implement:

```text
WebApplication
BreadcrumbList
FAQPage
```

Do not add structured data that does not accurately represent page content.

---

# 37. Internal Linking Requirements

Main calculator:

```text
→ DBQ Calculator
→ LEQ Calculator
→ SAQ Calculator
→ Score Distribution
→ APUSH Scoring Guide
```

Supporting pages:

```text
→ APUSH Score Calculator
```

Every supporting tool should have a clear route back to the primary calculator.

---

# 38. Analytics Requirements

Track anonymous events:

```text
calculator_view
year_selected
score_entered
calculator_completed
result_viewed
what_if_used
target_score_used
dbq_tool_opened
leq_tool_opened
saq_tool_opened
share_clicked
reset_clicked
```

Do not transmit unnecessary raw student information.

---

# 39. Performance Requirements

Target:

* Fast first contentful rendering.
* Minimal JavaScript required for the basic page.
* No unnecessary third-party dependencies.
* Optimized assets.
* Lazy-loaded secondary components.
* Efficient hydration if using a React/Next.js architecture.

The calculator must remain responsive during input.

---

# 40. Security Requirements

Even though this is a client-side educational calculator:

* Validate all input.
* Sanitize URL parameters.
* Do not execute arbitrary URL content.
* Do not store unnecessary personal information.
* Secure any future API endpoints.
* Apply rate limits to backend services.
* Keep dependencies patched.
* Use HTTPS.

---

# 41. Browser Requirements

Must work on current versions of:

* Chrome
* Edge
* Firefox
* Safari
* Chrome Android
* Safari iOS

---

# 42. Testing Requirements

## Unit Tests

At minimum:

* MCQ normalization.
* SAQ normalization.
* DBQ normalization.
* LEQ normalization.
* Weight calculation.
* Composite calculation.
* Boundary conditions.
* Invalid inputs.
* Prediction model.
* Year configuration.

Example test:

```text
MCQ = 55
SAQ = max
DBQ = max
LEQ = max

Expected composite = 100
```

---

# 43. Edge-Case Tests

Must test:

```text
0 / max
max / max
max + 1
negative score
decimal score
empty score
null score
NaN
string input
invalid year
invalid URL parameter
missing section
```

---

# 44. Integration Tests

Test complete workflows:

### Workflow 1

```text
Select year
→ Enter scores
→ Calculate
→ See result
```

### Workflow 2

```text
DBQ calculator
→ Calculate DBQ
→ Send to main calculator
```

### Workflow 3

```text
Main calculator
→ What-if simulator
→ Change score
→ Updated result
```

### Workflow 4

```text
Open shared URL
→ Validate parameters
→ Populate calculator
→ Display correct result
```

---

# 45. Visual QA Requirements

Verify:

* Mobile 320px width.
* Mobile 375px.
* Tablet.
* Desktop 1440px.
* Large desktop.
* Light mode.
* Error state.
* Empty state.
* Result state.
* Long decimal values.
* Large/small scores.
* Accessibility focus states.

---

# 46. Content Requirements

The page should communicate:

### What it does

> Calculate your APUSH weighted composite score and estimate your likely AP score.

### What it does not do

> This is an independent educational estimate and is not an official College Board score report.

### How it works

Explain normalization → weighting → composite → estimated AP score.

---

# 47. UI Component Requirements

Create reusable components:

```text
Header
Breadcrumbs
CalculatorCard
ExamYearSelector
ScoreInput
SectionScoreCard
ScoreBreakdown
ResultCard
ScoreRange
ConfidenceIndicator
WhatIfSimulator
TargetScoreCalculator
ImprovementScenario
MethodologySection
SourceSection
FAQSection
RelatedTools
Footer
```

Do not duplicate calculator markup across pages.

---

# 48. Design Requirements

Visual direction:

**Academic + modern + trustworthy**

Avoid:

* Excessively colorful gaming UI.
* Fake “official College Board” styling.
* Overloaded dashboards.
* Excessive animations.
* Intrusive ads.

Prioritize:

* Clear typography.
* Strong hierarchy.
* Large result number.
* Obvious inputs.
* Clear mathematical breakdown.
* Accessible contrast.

---

# 49. Animation Requirements

Animations should be subtle.

Allowed:

* Result number transition.
* Progress bar update.
* Expand/collapse sections.
* Button hover/focus transitions.

Avoid animations that delay calculation or make numerical information difficult to read.

Respect:

```css
prefers-reduced-motion
```

---

# 50. State Management Requirements

Calculator state must have a single source of truth.

Example:

```typescript
{
  year: 2027,
  mcq: 42,
  saq: 5,
  dbq: 5,
  leq: 4
}
```

Derived values must not be independently stored if they can be calculated from the source state.

For example, don't separately store:

```text
mcqPercentage
composite
dbqPercentage
```

unless there is a strong caching reason.

---

# 51. Offline/No-Network Requirement

The core calculation should continue to work after the application JavaScript has loaded, even if the user temporarily loses network connectivity.

No API request should be required for:

* Score validation.
* Composite calculation.
* Basic result generation.
* What-if simulation.

---

# 52. Privacy Requirements

MVP:

**No account required.**

Do not require:

* Name
* Email
* Phone number
* School
* Location

for normal calculator usage.

Anonymous analytics must not unnecessarily identify the user.

---

# 53. Monetization Requirements

Advertising, if used, must not interfere with:

* Score input
* Calculate button
* Result
* Error messages
* Mobile usability

The calculator must remain useful without clicking advertisements.

---

# 54. Admin Requirements

A future admin interface should allow authorized administrators to update:

* Exam years.
* Section maximums.
* Weights.
* Prediction model.
* Source URLs.
* Score distributions.
* FAQ content.

Changes must be versioned/auditable.

---

# 55. Critical Business Rule

The application must maintain a strict separation:

```text
OFFICIAL EXAM STRUCTURE
        ↓
CALCULATION ENGINE
        ↓
WEIGHTED COMPOSITE
        ↓
ESTIMATION MODEL
        ↓
USER-FACING PREDICTION
```

The prediction must never be represented as an official College Board conversion.

---

# 56. Definition of Done

The tool is production-ready only when all of the following are true:

**Functional**

* Calculator works correctly.
* All inputs validate correctly.
* Composite calculations are tested.
* Prediction is clearly marked as estimated.
* Year-specific configurations work.
* What-if calculations work.
* Reset works.

**UX**

* Mobile-first layout works.
* Result is immediately understandable.
* Breakdown is transparent.
* Accessibility requirements are met.

**SEO**

* Main page is indexable.
* Metadata is complete.
* Internal links work.
* Structured data is valid where used.
* Supporting pages have unique content.

**Technical**

* Calculation engine has unit tests.
* Configuration is separated from UI.
* No invalid score can produce a result.
* Core calculator does not depend on an external API.
* Production error monitoring is implemented.

---

## Recommended build architecture

The actual codebase should be organized approximately like this:

```text
src/
├── app/
│   ├── apush-score-calculator/
│   ├── apush-score-predictor/
│   ├── apush-dbq-score-calculator/
│   ├── apush-leq-score-calculator/
│   ├── apush-saq-score-calculator/
│   └── apush-score-distribution/
│
├── components/
│   ├── calculator/
│   ├── results/
│   ├── simulator/
│   ├── rubric/
│   ├── seo/
│   └── common/
│
├── lib/
│   ├── scoring/
│   │   ├── calculator.ts
│   │   ├── validation.ts
│   │   └── prediction.ts
│   │
│   ├── exams/
│   │   ├── 2026.ts
│   │   └── 2027.ts
│   │
│   └── utils/
│
├── data/
│   ├── exam-config/
│   ├── prediction-models/
│   ├── score-distributions/
│   └── sources/
│
└── tests/
    ├── scoring/
    ├── prediction/
    ├── validation/
    └── integration/
```

This structure is preferable to putting all APUSH logic inside one page component because it lets you later add other AP exam calculators using the same scoring architecture.
