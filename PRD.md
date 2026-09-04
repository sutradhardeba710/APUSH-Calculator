# Product Requirements Document (PRD)

## APUSH Score Calculator & Predictor

**Document Version:** 1.0
**Product Type:** Educational Web Tool
**Primary Platform:** Responsive Web
**Primary Audience:** AP U.S. History students, teachers, tutors, parents
**Primary Goal:** Allow users to calculate their APUSH weighted composite score and estimate their likely AP score (1–5) from practice or self-reported results.

---

## 1. Product Overview

The **APUSH Score Calculator** is an interactive educational tool that converts a student's AP United States History practice-exam performance into:

* Section-level percentages
* Weighted composite score
* Estimated AP score from 1–5
* Estimated score range/confidence
* Strengths and weaknesses
* “What do I need for a 4/5?” analysis
* What-if score simulation
* Optional DBQ, LEQ, and SAQ rubric calculators

The product should be designed as a **trustworthy calculator and educational planning tool**, not as an official College Board scoring system.

The core experience should take less than one minute.

---

# 2. Problem Statement

Students frequently know their number of correct multiple-choice questions or their essay rubric scores but do not know how these scores translate into their overall APUSH performance.

Existing calculators often have one or more problems:

* They provide only a simple raw-score calculation.
* They hide how the final result was calculated.
* They use outdated exam structures.
* They present estimated 1–5 boundaries as official.
* They do not help students understand where additional points would matter most.
* They do not support future APUSH exam-format changes.

The product solves these problems through a transparent, modular, year-aware scoring experience.

---

# 3. Product Goals

## Primary Goals

### G1 — Calculate weighted performance

The system must calculate the user's weighted APUSH composite using the applicable exam structure.

### G2 — Estimate AP score

The system must translate the calculated composite into an **estimated AP score of 1–5**, clearly labeled as an estimate.

### G3 — Explain the result

Users must be able to understand exactly how their result was produced.

### G4 — Improve study decisions

The system should show which section offers the greatest opportunity to improve the user's overall result.

### G5 — Support multiple exam years

Scoring rules and assessment structures must be configurable by exam year.

### G6 — Build search visibility

The site should have a strong SEO architecture around APUSH score calculation, prediction, DBQ, LEQ, SAQ, score requirements, and historical score information.

---

# 4. Non-Goals

The first version should **not** attempt to:

* Replicate College Board's proprietary scoring system.
* Guarantee a student's final AP score.
* Claim that a specific composite threshold is an official permanent AP score boundary.
* Replace College Board's official score reporting.
* Automatically grade essays using AI in the MVP.
* Require user registration to perform a basic calculation.

---

# 5. Target Users

## Persona 1 — APUSH Student

Age: approximately 14–18.

Needs:

* Quick score estimate
* Mobile-friendly calculator
* “Can I get a 5?”
* What-if analysis
* Study priorities

Primary journey:

**Google → Calculator → Enter scores → Result → What-if → Study**

---

## Persona 2 — APUSH Teacher

Needs:

* Explain scoring to students
* Test different performance scenarios
* DBQ/LEQ score analysis
* Printable results

Primary journey:

**Calculator → Enter sample score → Breakdown → Explain to students**

---

## Persona 3 — Tutor / Test Prep User

Needs:

* Repeated calculations
* Compare attempts
* Identify weak sections
* Track improvement

---

# 6. Core User Journey

```text
Landing Page
      ↓
Select Exam Year
      ↓
Enter MCQ Score
      ↓
Enter SAQ Score
      ↓
Enter DBQ Score
      ↓
Enter LEQ Score
      ↓
Calculate
      ↓
Weighted Composite
      ↓
Estimated AP Score
      ↓
Score Breakdown
      ↓
Performance Analysis
      ↓
What-If Simulator
      ↓
Target Score Analysis
```

The first calculation should require **no login**.

---

# 7. MVP Feature Set

## 7.1 Exam Year Selector

At the top of the calculator:

**Exam Year**

```text
[ 2027 ▼ ]
```

The selected year controls:

* Exam structure
* Section configuration
* Maximum raw scores
* Weighting
* Rubrics
* Prediction configuration
* Text explaining the structure

The system must not hard-code all years into application logic.

---

# 8. Calculator Input Requirements

## 8.1 Multiple Choice

Input:

```text
Multiple Choice
Correct Answers
[ 42 ] / 55
```

Requirements:

* Integer only
* Minimum: 0
* Maximum: configured maximum
* Reject decimals
* Reject negative numbers
* Show error immediately for invalid values

Derived value:

```text
MCQ Percentage =
Correct Answers / Maximum Questions × 100
```

Example:

```text
42 / 55 = 76.36%
```

---

# 9. SAQ Input

The calculator must support section-level SAQ scoring.

Example interface:

```text
Short Answer Questions

SAQ 1    [ 2 ] / 3
SAQ 2    [ 2 ] / 3
SAQ 3    [ 1 ] / 3

Total     5 / 9
```

Requirements:

* Each SAQ input accepts integer values.
* Maximum values must come from year-specific configuration.
* Automatic total.
* Automatic percentage.
* Prevent score above maximum.
* Optional expandable rubric explanation.

The system should allow the number and structure of SAQs to change by exam year.

---

# 10. DBQ Input

Basic calculator:

```text
Document-Based Question

DBQ Score
[ 5 ] / 7
```

Derived:

```text
DBQ Percentage =
DBQ Score / DBQ Maximum × 100
```

Optional detailed mode:

```text
DBQ Rubric

Thesis / Claim            [ ✓ ]
Contextualization         [ ✓ ]
Evidence                   [ 2 ]
Outside Evidence           [ ✓ ]
Sourcing / Analysis       [ 1 ]
Complex Understanding     [ — ]
```

The rubric calculator should feed directly into the main score calculator.

---

# 11. LEQ Input

Basic:

```text
Long Essay Question

LEQ Score
[ 4 ] / 6
```

Optional detailed rubric mode:

```text
LEQ Rubric

Thesis / Claim
Contextualization
Evidence
Analysis & Reasoning
Complex Understanding
```

The resulting score should automatically populate the main calculator.

---

# 12. Weighted Composite Calculation

The system must separate **raw section scoring** from **weighting**.

Conceptually:

```text
MCQ Contribution =
MCQ Percentage × MCQ Weight

SAQ Contribution =
SAQ Percentage × SAQ Weight

DBQ Contribution =
DBQ Percentage × DBQ Weight

LEQ Contribution =
LEQ Percentage × LEQ Weight
```

Then:

```text
Composite Score =
MCQ Contribution
+ SAQ Contribution
+ DBQ Contribution
+ LEQ Contribution
```

For the current APUSH structure reflected in the product requirements, the principal weights are:

| Section         |   Weight |
| --------------- | -------: |
| Multiple Choice |      40% |
| SAQ             |      20% |
| DBQ             |      25% |
| LEQ             |      15% |
| **Total**       | **100%** |

These values should reside in configuration, not be scattered through frontend code.

---

# 13. Calculation Example

Example user:

```text
MCQ: 42 / 55
SAQ: 5 / 9
DBQ: 5 / 7
LEQ: 4 / 6
```

The system calculates each section's normalized performance and then applies the appropriate weights.

The result page should visibly show:

```text
Weighted Composite

69.5 / 100
```

The exact displayed precision should be configurable.

Recommended:

* Internal calculation: full precision
* Main result: 1 decimal place
* Optional detailed view: 2 decimals

---

# 14. Estimated AP Score Engine

This component converts the weighted composite to an estimated AP score.

Important product requirement:

### The interface must never imply that the calculator's threshold is an official permanent College Board conversion table.

Display wording:

> **Estimated AP Score**

Not:

> **Official AP Score**

Recommended explanatory text:

> Your estimated AP score is based on the selected exam-year scoring model. Actual AP score conversions can vary by exam administration, so this result should be used as an estimate.

---

# 15. Score Range

Instead of showing only:

**4**

the product should show:

```text
Estimated AP Score

4

Likely Range
3–4

Confidence
Moderate
```

The range and confidence system should be configurable.

Possible confidence levels:

* Low
* Moderate
* High

The system should avoid pretending to have statistical precision that the underlying model cannot support.

---

# 16. Result Screen

The result screen is the most important UI component.

Recommended layout:

```text
┌──────────────────────────────────┐
│        YOUR APUSH RESULT         │
│                                  │
│              4                   │
│       Estimated AP Score         │
│                                  │
│      Composite: 69.5 / 100       │
│      Likely Range: 3–4           │
└──────────────────────────────────┘
```

Then:

### Score Breakdown

```text
Multiple Choice       76.4%
SAQ                   55.6%
DBQ                   71.4%
LEQ                   66.7%
```

Then:

### Weighted Contribution

```text
MCQ       30.5
SAQ       11.1
DBQ       17.9
LEQ       10.0
----------------
Total     69.5
```

---

# 17. Performance Analysis

The tool should automatically analyze the user's section performance.

Example:

### Strongest Area

**Multiple Choice — 76.4%**

### Biggest Opportunity

**SAQ — 55.6%**

### Recommendation

> Improving your SAQ performance may be one of the fastest ways to increase your overall composite because the section has a meaningful weighted contribution.

The wording should be driven by actual mathematics rather than generic motivational text.

---

# 18. “What Do I Need for a 5?” Feature

Add a prominent card:

## Target Score

```text
I want to score:
[ 5 ▼ ]
```

Then calculate:

```text
Current Estimated Score: 4

Estimated improvement needed:
+X composite points
```

The tool should provide scenarios.

Example:

```text
Possible improvements

+3 MCQ questions
≈ X composite improvement

+1 DBQ point
≈ X composite improvement

+1 LEQ point
≈ X composite improvement
```

It should also calculate combinations.

For example:

```text
Scenario A
+4 MCQ

Scenario B
+2 MCQ
+1 SAQ

Scenario C
+1 DBQ
```

The system should rank scenarios according to the improvement required.

---

# 19. What-If Simulator

This should be a major interactive feature.

## UI

```text
What-If Score Simulator

MCQ
[ 42 ] / 55

SAQ
[ 5 ] / 9

DBQ
[ 5 ] / 7

LEQ
[ 4 ] / 6

                ↓

Composite: 69.5

Estimated AP Score: 4
```

Changing an input should update the result immediately without a page reload.

For mobile:

* Numeric stepper
* Slider optional
* Large result card

---

# 20. Score Improvement Mode

Allow:

```text
Current Score
42 / 55

Goal
48 / 55
```

Then show:

```text
Questions to improve:
6

Potential composite improvement:
+4.36
```

This feature should also work at section and overall levels.

---

# 21. Historical Score Distribution

Create a separate informational module:

## APUSH Score Distribution

```text
Score 5  ███████████
Score 4  █████████████████
Score 3  ████████████
Score 2  █████████
Score 1  ████
```

Requirements:

* Year selector
* Percentage by score
* 3+ percentage
* Accessible chart labels
* Source/reference information
* Data stored separately from UI

This should have its own SEO-friendly page as well.

---

# 22. DBQ Rubric Calculator

Dedicated URL:

`/apush-dbq-score-calculator/`

Function:

User checks the rubric criteria and receives:

```text
DBQ Score: 5 / 7
```

Then:

**Use this score in APUSH Calculator →**

This should deep-link the score back to the main calculator.

---

# 23. LEQ Rubric Calculator

Dedicated URL:

`/apush-leq-score-calculator/`

Function:

* Enter/check rubric criteria
* Calculate LEQ raw score
* Send result into main calculator

---

# 24. SAQ Calculator

Dedicated URL:

`/apush-saq-score-calculator/`

Features:

* Individual SAQ scores
* Total SAQ score
* Percentage
* Optional rubric guidance
* Main calculator integration

---

# 25. Shareable Results

After calculation:

```text
[ Share Result ]
```

Generate a shareable URL containing only the necessary calculation state.

Example concept:

`/apush-score-calculator/?mcq=42&saq=5&dbq=5&leq=4&year=2027`

Requirements:

* No sensitive information
* No account required
* URL state must be validated server/client side
* Easy copy button
* Open Graph metadata for social sharing where practical

---

# 26. Reset Function

Button:

**Reset Calculator**

Requirements:

* Clear every input
* Restore default year
* Restore empty state
* Do not require refresh

Optional confirmation should not be necessary because the action is reversible by re-entering data.

---

# 27. Save Progress

### Phase 2

Allow optional local saving:

```text
Practice Attempt #1
Practice Attempt #2
Practice Attempt #3
```

Possible implementation:

* localStorage for anonymous users
* Account/database storage in a later phase

Do not make registration mandatory for basic calculation.

---

# 28. Progress Tracking

### Phase 2

Show:

```text
Practice History

Attempt 1    62.4    3
Attempt 2    68.9    4
Attempt 3    73.2    4
Attempt 4    79.1    5
```

Chart:

**Composite Score Over Time**

This allows the product to become a study companion rather than a single-use calculator.

---

# 29. SEO Requirements

Primary page:

`/apush-score-calculator/`

Suggested supporting pages:

```text
/apush-score-calculator/
/apush-score-calculator-2027/
/apush-score-calculator-2026/
/apush-score-predictor/
/apush-dbq-score-calculator/
/apush-leq-score-calculator/
/apush-saq-score-calculator/
/apush-score-distribution/
/apush-score-scale/
/how-apush-is-scored/
```

Avoid generating thin, duplicate pages for every keyword variation.

Every indexable page needs unique:

* Title
* H1
* Intro
* Supporting content
* Internal links
* FAQ where appropriate
* Metadata
* Canonical URL

---

# 30. SEO Page Structure

Main page:

```text
H1
APUSH Score Calculator

Intro

Calculator

Your Result

How APUSH Scoring Works

APUSH Score Breakdown

What Score Do You Need for a 5?

What-If Calculator

APUSH DBQ / LEQ / SAQ

Historical Score Distribution

Frequently Asked Questions
```

The calculator should appear high on the page rather than forcing users through a long article before they can use it.

---

# 31. Structured Data

Use only schema types that accurately represent the page.

Potential candidates:

* `WebApplication`
* `FAQPage`, only when the FAQ content meets Google's applicable structured-data requirements
* `BreadcrumbList`

Do not add fake ratings/reviews or unsupported properties.

---

# 32. Internal Linking

Main page should link to:

* DBQ calculator
* LEQ calculator
* SAQ calculator
* Score distribution
* APUSH scoring guide
* APUSH study resources

Supporting pages should link back to:

**APUSH Score Calculator**

This creates a clear topical cluster.

---

# 33. Accessibility Requirements

Target:

**WCAG 2.2 AA**

Requirements:

* All inputs have labels
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Screen-reader compatible form errors
* No information conveyed by color alone
* Accessible chart alternatives
* `aria-live` for dynamic result updates
* Buttons must have descriptive names

Example:

When the result changes:

> “Estimated AP score updated to 4.”

should be announced accessibly without becoming disruptive.

---

# 34. Responsive Design

Breakpoints should support:

* Mobile
* Tablet
* Desktop
* Large desktop

Mobile priority:

```text
Header
↓
Calculator
↓
Result
↓
Breakdown
↓
Simulator
↓
Explanation
↓
FAQ
```

Avoid oversized desktop-style tables on mobile.

---

# 35. Performance Requirements

Target:

* Fast initial load
* Minimal JavaScript for basic calculator
* No unnecessary third-party scripts
* Lazy-load secondary charts
* Avoid blocking fonts/scripts
* Optimize CSS
* Server-render SEO content where applicable

Primary calculator interaction should work immediately after page load.

---

# 36. Technical Architecture

Recommended conceptual architecture:

```text
                 ┌─────────────────────┐
                 │      Web Client      │
                 │ Next.js / React etc. │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │    Calculator UI     │
                 └──────────┬──────────┘
                            │
                 ┌──────────▼──────────┐
                 │  Scoring Engine      │
                 │ Pure deterministic   │
                 │ calculation module   │
                 └──────────┬──────────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
    ┌────────▼─────────┐        ┌──────────▼─────────┐
    │ Exam Config       │        │ Prediction Config   │
    │ Year / weighting  │        │ Estimated ranges    │
    └───────────────────┘        └─────────────────────┘
```

The scoring engine should be independent from the visual interface.

---

# 37. Configuration Architecture

Use a year-based configuration model.

Example:

```json
{
  "year": 2027,
  "sections": {
    "mcq": {
      "max": 55,
      "weight": 0.40
    },
    "saq": {
      "max": 9,
      "weight": 0.20
    },
    "dbq": {
      "max": 7,
      "weight": 0.25
    },
    "leq": {
      "max": 6,
      "weight": 0.15
    }
  }
}
```

Prediction configuration should be separate:

```json
{
  "year": 2027,
  "modelVersion": "v1",
  "estimatedRanges": {}
}
```

This allows the prediction model to change without rewriting the scoring engine.

---

# 38. Core Data Model

Conceptual entities:

### ExamYear

```text
id
year
name
active
version
```

### ExamSection

```text
id
examYearId
type
maxScore
weight
displayOrder
```

### PredictionModel

```text
id
examYearId
version
method
parameters
updatedAt
```

### ScoreAttempt

Optional Phase 2:

```text
id
examYear
mcqScore
saqScore
dbqScore
leqScore
compositeScore
estimatedScore
createdAt
```

---

# 39. Validation Rules

Every input must be validated twice where applicable:

### Client-side

For instant UX feedback.

### Calculation layer

To prevent invalid calculations even if the UI is bypassed.

Example:

```text
MCQ = -1
→ invalid

MCQ = 56
→ invalid

MCQ = 42.5
→ invalid

MCQ = "hello"
→ invalid
```

A calculation must never occur with invalid input.

---

# 40. Empty State

When the user has entered nothing:

```text
Enter your practice-test scores to calculate your estimated APUSH score.
```

The Calculate button may remain disabled until the minimum required fields are populated.

Alternatively, sensible zero/default values can be used, but blank input is preferable to accidentally interpreting “not answered” as zero.

---

# 41. Error Handling

Example:

```text
MCQ score cannot be greater than 55.
```

The error should appear directly below the relevant input.

Avoid generic:

> “Something went wrong.”

for normal validation failures.

---

# 42. Result Interpretation

Never make statements such as:

> “You will definitely get a 5.”

Use:

> “Estimated AP score: 5”

and:

> “Actual AP scores may differ.”

---

# 43. Transparency / Methodology Section

The page must include a visible:

## How We Calculate Your Score

Explain:

1. Raw scores are normalized to section percentages.
2. Section percentages are multiplied by their configured weights.
3. Contributions are added to produce a weighted composite.
4. The composite is passed through the selected year/model to produce an estimated AP score.
5. The 1–5 result is a prediction rather than an official College Board score.

This is essential for user trust.

---

# 44. Sources / Attribution

The page should have a compact source section referencing authoritative College Board information for:

* Exam structure
* Section weighting
* Rubrics
* Exam-year changes
* Score distributions where official data is used

The system should store source metadata alongside year-specific configurations.

Example conceptual object:

```json
{
  "source": {
    "publisher": "College Board",
    "title": "...",
    "url": "...",
    "accessedAt": "..."
  }
}
```

---

# 45. Analytics Requirements

Track anonymous product events.

Recommended events:

```text
calculator_loaded
exam_year_selected
score_started
score_calculated
result_viewed
what_if_used
target_score_used
dbq_calculator_opened
leq_calculator_opened
share_clicked
reset_clicked
```

Do not send unnecessary personally identifiable information.

---

# 46. Conversion Goals

Primary conversion:

**Calculator completed**

Secondary:

**What-if simulator used**

Tertiary:

**Related tool opened**

For a free educational calculator, optimizing for usefulness and repeat use is more appropriate than putting aggressive lead forms in front of the calculation.

---

# 47. Ad Placement Considerations

If monetized with advertising:

Do not put ads:

* Between every input field
* Directly beside critical error messages
* In a way that makes buttons look like ads
* Above the calculator such that mobile users must scroll excessively before using it

Recommended:

```text
Intro
Calculator
Result
Ad
Educational content
Ad
FAQ
```

The calculation itself should remain the primary experience.

---

# 48. Security Requirements

Even though the calculator is low-risk, production quality requires:

* Input validation
* Sanitization
* No arbitrary code execution
* Secure query handling
* CSP where appropriate
* HTTPS
* Dependency updates
* Rate limiting for APIs if APIs are introduced
* No sensitive information stored unnecessarily

---

# 49. Browser Support

Support current:

* Chrome
* Edge
* Safari
* Firefox
* Mobile Chrome
* Mobile Safari

The calculator must not depend on browser-specific behavior.

---

# 50. Acceptance Criteria — MVP

The MVP is complete when:

### Calculator

* [ ] User can select exam year.
* [ ] User can enter MCQ score.
* [ ] User can enter SAQ score.
* [ ] User can enter DBQ score.
* [ ] User can enter LEQ score.
* [ ] Invalid scores are rejected.
* [ ] Weighted composite is correctly calculated.
* [ ] Result displays immediately.
* [ ] Section breakdown is displayed.
* [ ] Estimated AP score is displayed.
* [ ] Result is clearly labeled as estimated.

### UX

* [ ] Fully responsive.
* [ ] Works without login.
* [ ] Reset works.
* [ ] Keyboard accessible.
* [ ] Screen-reader accessible.
* [ ] Error states are understandable.

### SEO

* [ ] Indexable main calculator page.
* [ ] Unique title/meta description.
* [ ] Correct canonical.
* [ ] Breadcrumbs where appropriate.
* [ ] Internal linking.
* [ ] FAQ content where appropriate.
* [ ] Structured data validated.

### Architecture

* [ ] Scoring logic separated from UI.
* [ ] Exam years stored as configuration.
* [ ] Prediction model separated from raw calculation.
* [ ] Configuration can be updated without rewriting calculator components.

---

# 51. Phase 2 Features

After MVP:

### Study Intelligence

* Score improvement recommendations
* Section-specific study suggestions
* Practice history
* Progress charts

### Advanced Rubrics

* DBQ detailed rubric tool
* LEQ detailed rubric tool
* SAQ analysis

### Personalization

* Saved attempts
* Accounts
* Student dashboard

### Sharing

* Shareable result links
* Printable score reports
* PDF export

### Teacher Tools

* Classroom mode
* Multiple student score entry
* Anonymous class analysis

---

# 52. Phase 3 Features

Potential larger product direction:

## AP History Score Calculator Platform

The underlying architecture could eventually support:

```text
APUSH
AP World History
AP US Government
AP European History
AP Psychology
AP Biology
AP Chemistry
...
```

Rather than building every calculator independently, create a generic:

```text
Exam Configuration
        ↓
Scoring Engine
        ↓
Prediction Engine
        ↓
Reusable Calculator UI
```

Then APUSH becomes the first implementation of a broader educational scoring platform.

---

# 53. Recommended Information Architecture

```text
/
├── /apush-score-calculator/
│
├── /apush-score-predictor/
│
├── /apush-dbq-score-calculator/
│
├── /apush-leq-score-calculator/
│
├── /apush-saq-score-calculator/
│
├── /apush-score-distribution/
│
├── /how-apush-is-scored/
│
└── /resources/
```

---

# 54. Key Product Principle

The most important distinction in this product is:

### **Calculation ≠ Prediction**

The calculator should be deterministic:

> “Based on the entered scores and the configured exam weighting, your composite is 69.5.”

The prediction should be probabilistic/estimated:

> “Based on the selected year's prediction model, your estimated AP score is 4.”

Keeping these two concepts separate makes the tool much more trustworthy, maintainable, and adaptable.

---

# 55. Final MVP Experience

The ideal user experience is:

```text
APUSH SCORE CALCULATOR

Calculate your estimated AP U.S. History score.

Exam Year
[ 2027 ▼ ]

MULTIPLE CHOICE
42 / 55

SHORT ANSWER
5 / 9

DBQ
5 / 7

LEQ
4 / 6

[ CALCULATE SCORE ]

────────────────────

YOUR RESULT

           4
   Estimated AP Score

     69.5 / 100
    Weighted Composite

   Likely Range: 3–4

────────────────────

SCORE BREAKDOWN

MCQ      76.4%    30.5
SAQ      55.6%    11.1
DBQ      71.4%    17.9
LEQ      66.7%    10.0

────────────────────

WHAT-IF SIMULATOR

“What happens if I get 5 more MCQs right?”

[ Adjust Scores ]

────────────────────

TARGET SCORE

“What do I need for a 5?”

[ Explore ]

────────────────────

HOW THE CALCULATION WORKS

[ Explanation ]

DBQ Calculator
LEQ Calculator
SAQ Calculator

FAQ
```

## Product success definition

The first release should feel like a **real educational product rather than a simple formula page**: fast enough to use during studying, transparent enough that students understand the calculation, flexible enough to accommodate APUSH exam-year changes, and structured so the same architecture can later power additional AP calculators.
