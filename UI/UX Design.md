# APUSH Score Calculator — Detailed UI/UX Design Specification

**Design Version:** 1.0
**Design Goal:** Create a professional, student-friendly, extremely easy-to-use APUSH calculator that feels trustworthy, fast, modern, and simple enough to understand at a glance.

---

# 1. Design Vision

The APUSH Score Calculator should feel like a combination of:

**Educational tool + modern calculator + professional analytics dashboard**

The user should never feel that they are filling out a complicated form.

The primary experience should be:

> **Enter scores → Calculate → Understand result → Improve score**

The design should prioritize **clarity over decoration**.

The calculator itself should be the visual focus of the page.

---

# 2. Core UX Principle

The user should be able to understand the calculator within **5 seconds**.

When the page opens, the user should immediately understand:

1. What the tool does.
2. What they need to enter.
3. Where to enter it.
4. How to calculate.
5. What the result means.

Avoid forcing users to read a long explanation before using the tool.

---

# 3. Overall Page Structure

Desktop:

```text
┌───────────────────────────────────────────────────────────────┐
│ LOGO          APUSH Tools       Resources      About           │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│                    APUSH Score Calculator                    │
│      Calculate your estimated APUSH score in seconds.         │
│                                                               │
│              [ Exam Year: 2027 ▼ ]                            │
│                                                               │
├───────────────────────────────┬───────────────────────────────┤
│                               │                               │
│      SCORE INPUT              │          YOUR RESULT           │
│                               │                               │
│  Multiple Choice              │          Estimated             │
│  [ 42 ] / 55                  │            4                  │
│                               │                               │
│  Short Answer                 │       Composite               │
│  [ 5 ] / 9                    │       69.5 / 100              │
│                               │                               │
│  DBQ                          │       Likely Range             │
│  [ 5 ] / 7                    │          3 – 4                │
│                               │                               │
│  LEQ                          │                               │
│  [ 4 ] / 6                    │      [ See Breakdown ]        │
│                               │                               │
│     [ Calculate Score ]       │                               │
│                               │                               │
└───────────────────────────────┴───────────────────────────────┘

        Score Breakdown

        What-If Simulator

        What Do I Need for a 5?

        How APUSH Scoring Works

        Related Tools

        FAQ

        Footer
```

Mobile:

```text
┌─────────────────────┐
│ ☰  APUSH Calculator │
├─────────────────────┤
│                     │
│ APUSH Score         │
│ Calculator          │
│                     │
│ Exam Year           │
│ [ 2027 ▼ ]          │
│                     │
│ Multiple Choice     │
│ [ 42 ] / 55         │
│                     │
│ SAQ                 │
│ [ 5 ] / 9           │
│                     │
│ DBQ                 │
│ [ 5 ] / 7           │
│                     │
│ LEQ                 │
│ [ 4 ] / 6           │
│                     │
│ [ CALCULATE SCORE ] │
│                     │
├─────────────────────┤
│ YOUR RESULT         │
│                     │
│        4            │
│ Estimated AP Score  │
│                     │
│ 69.5 / 100          │
│                     │
│ Likely Range: 3–4   │
└─────────────────────┘
```

---

# 4. Header Design

Header should be compact.

Desktop:

```text
[Logo] APUSH Calculator

Tools ▾     Resources ▾     Score Guides     About
```

Right side:

```text
[ Dark/Light ] 
```

Do not put too many navigation items.

Mobile:

```text
[☰] APUSH Calculator
```

Navigation opens a simple drawer.

---

# 5. Breadcrumb Design

Below the header:

```text
Home / APUSH Tools / APUSH Score Calculator
```

Requirements:

* Small typography.
* Low visual emphasis.
* Clickable.
* Accessible.
* Helps users understand website hierarchy.

---

# 6. Hero Section

The hero should be compact.

### Heading

# APUSH Score Calculator

### Supporting copy

> Estimate your AP U.S. History score from your practice-test results. Enter your section scores to calculate your weighted composite and estimated AP score.

Then immediately show:

```text
Exam Year
[ 2027 ▼ ]
```

Avoid a huge marketing-style hero.

The user came for the calculator.

---

# 7. Calculator Card Design

The calculator should be the primary visual component.

Recommended:

```text
┌────────────────────────────────────────┐
│  Calculate Your APUSH Score            │
│                                        │
│  Enter your practice-test scores.      │
│                                        │
│  Multiple Choice                       │
│  Questions Correct                     │
│                                        │
│  ┌─────────────┐  / 55                │
│  │     42      │                       │
│  └─────────────┘                       │
│  76.4% accuracy                        │
│                                        │
│  Short Answer Questions                │
│                                        │
│  Total Score                           │
│  ┌─────────────┐ / 9                   │
│  │      5      │                       │
│  └─────────────┘                       │
│                                        │
│  DBQ                                    │
│  ┌─────────────┐ / 7                   │
│  │      5      │                       │
│  └─────────────┘                       │
│                                        │
│  LEQ                                    │
│  ┌─────────────┐ / 6                   │
│  │      4      │                       │
│  └─────────────┘                       │
│                                        │
│  [       Calculate Score       ]       │
└────────────────────────────────────────┘
```

---

# 8. Input Design

Inputs should be visually obvious.

Use:

```text
Label
Helper text
Input + maximum
Validation
```

Example:

```text
Multiple Choice

How many did you get correct?

┌───────────────┐
│      42       │ / 55
└───────────────┘

76.4% accuracy
```

The user should not need to calculate percentages themselves.

---

# 9. Numeric Input Controls

The input should support:

* Direct keyboard entry.
* Up/down controls where appropriate.
* Mobile numeric keyboard.
* Clear value.
* Minimum/maximum enforcement.

Do not force users to drag sliders for precise scores.

A slider may be an optional secondary interaction in the **What-If Simulator**, but the primary calculator should use numeric fields.

---

# 10. Input Microcopy

Use friendly wording.

Instead of:

> MCQ Raw Score

Use:

> **Multiple Choice**

Instead of:

> Enter normalized score

Use:

> **How many questions did you get correct?**

Instead of:

> Composite calculation

Use:

> **Weighted Composite**

This keeps the tool understandable to high-school students.

---

# 11. Score Maximum Display

Always show the maximum:

```text
42 / 55
5 / 9
5 / 7
4 / 6
```

Never make users remember the maximum values.

---

# 12. Real-Time Feedback

After entering a valid score, show a small percentage.

Example:

```text
42 / 55
76.4% accuracy
```

The percentage should update immediately.

This gives users feedback before they press Calculate.

---

# 13. Validation Design

Errors should appear directly under the input.

Example:

```text
┌───────────────┐
│      58       │ / 55
└───────────────┘

⚠ Score cannot be greater than 55.
```

Do not use a generic popup.

Do not move the user away from the field.

---

# 14. Calculate Button

Primary CTA:

# Calculate My Score

Alternative:

# Calculate Score

Button characteristics:

* Full width on mobile.
* Strong visual hierarchy.
* Large touch target.
* Clear action.
* Disabled only when necessary.
* No confusing secondary buttons nearby.

The button should visually stand apart from ordinary links.

---

# 15. Result Card

This is the most important element after calculation.

Use a visually distinct result card.

```text
┌────────────────────────────────────────┐
│              YOUR RESULT               │
│                                        │
│              Estimated                 │
│              AP Score                  │
│                                        │
│                 4                      │
│                                        │
│          Weighted Composite            │
│              69.5 / 100                │
│                                        │
│          Estimated Range               │
│                3–4                     │
│                                        │
│        Confidence: Moderate            │
└────────────────────────────────────────┘
```

The **4** should be the largest element.

---

# 16. AP Score Scale

Below the result:

```text
AP SCORE

1      2      3      4      5
●──────●──────●──────●──────●
                     ▲
                   YOU
```

Or a segmented progress indicator.

The current score should be visually highlighted.

Never rely only on color to indicate the selected score.

---

# 17. Result Explanation

Immediately under the score:

> Based on your entered scores, your weighted composite is **69.5/100**, producing an **estimated AP score of 4** under the selected scoring model.

Then:

> Actual AP score conversions may vary by exam administration.

This keeps the result transparent.

---

# 18. Score Breakdown

Use a clean card:

```text
Score Breakdown

Multiple Choice
42 / 55
76.4%
40% weight
30.5 points

SAQ
5 / 9
55.6%
20% weight
11.1 points

DBQ
5 / 7
71.4%
25% weight
17.9 points

LEQ
4 / 6
66.7%
15% weight
10.0 points
```

Desktop can use a table.

Mobile should use cards.

---

# 19. Visual Contribution Bars

For each section:

```text
Multiple Choice
76.4%

████████████████████████░░░░░░

Weight: 40%
Contribution: 30.5
```

The bar communicates performance much faster than text alone.

Avoid making the interface look like a gaming scorecard.

---

# 20. Strongest / Weakest Analysis

After the breakdown:

```text
Performance Summary

✓ Strongest
Multiple Choice
76.4%

↑ Biggest Opportunity
SAQ
55.6%
```

The wording should be encouraging rather than negative.

Avoid:

> “You are bad at SAQs.”

Use:

> “SAQ is your biggest opportunity for improvement.”

---

# 21. What-If Simulator Design

Heading:

# What-If Score Simulator

Description:

> See how changing one or more section scores could affect your estimated result.

UI:

```text
Multiple Choice
[ 42 ] / 55

SAQ
[ 5 ] / 9

DBQ
[ 5 ] / 7

LEQ
[ 4 ] / 6

────────────────────

Composite
69.5

Estimated AP Score
4
```

Add optional quick actions:

```text
[ +1 MCQ ]
[ +1 SAQ ]
[ +1 DBQ ]
[ +1 LEQ ]
```

These buttons make experimentation extremely easy.

---

# 22. Simulator Comparison

When a user changes a score:

```text
CURRENT
69.5

NEW
71.3

CHANGE
+1.8
```

Use a simple comparison.

Example:

> +1 DBQ point could increase your weighted composite by approximately X points under this configuration.

---

# 23. Target Score Calculator

Heading:

# What Do I Need for a 5?

Dropdown:

```text
Target AP Score
[ 5 ▼ ]
```

Result:

```text
Current estimated score
4

Target
5

Estimated improvement needed
+X composite points
```

Then:

```text
Possible improvement paths

+1 DBQ point
or

+4 MCQ questions
or

+2 MCQ + 1 SAQ
```

This should be presented as scenarios, not a guaranteed path.

---

# 24. Quick Presets

For usability, add optional presets:

```text
Common Scores

[ 30 MCQ ]
[ 35 MCQ ]
[ 40 MCQ ]
[ 45 MCQ ]
[ 50 MCQ ]
```

These are particularly useful in the What-If Simulator, not necessarily the main calculator.

---

# 25. DBQ / LEQ / SAQ Related Tools

Under the calculator:

```text
Need help calculating individual sections?

┌──────────────────┐
│ DBQ Calculator   │
│ Calculate your   │
│ DBQ rubric score │
│ [ Open → ]       │
└──────────────────┘

┌──────────────────┐
│ LEQ Calculator   │
│ Calculate your   │
│ LEQ score        │
│ [ Open → ]       │
└──────────────────┘
```

Cards should be visually consistent.

---

# 26. “How It Works” Section

Use a simple three-step explanation.

```text
01
Enter Your Scores

Add your MCQ, SAQ,
DBQ and LEQ results.

02
We Apply the Weights

Each section contributes
according to its exam weight.

03
See Your Estimate

Get your weighted
composite and estimated AP score.
```

This is much easier to understand than a large mathematical block.

---

# 27. Methodology Section

For advanced users:

### How We Calculate Your Score

Show the formula inside a collapsible section.

Example:

```text
Section Performance
        ↓
Section Weight
        ↓
Weighted Contribution
        ↓
Total Composite
        ↓
Estimated AP Score
```

Add a “Show calculation” option.

---

# 28. Detailed Calculation Toggle

Button:

**Show Calculation**

Expands:

```text
MCQ
42 / 55 × 40
= 30.55

SAQ
5 / 9 × 20
= 11.11

DBQ
5 / 7 × 25
= 17.86

LEQ
4 / 6 × 15
= 10.00

Total
69.52
```

This is excellent for transparency without cluttering the default experience.

---

# 29. Historical Score Data

Use a dedicated chart section.

```text
APUSH Score Distribution

2026 ▼

5  ███████████
4  ███████████████████████
3  ███████████████
2  ███████████
1  █████
```

Use an accessible table beneath/alongside the chart.

---

# 30. FAQ Design

Use accordion cards:

```text
How accurate is this APUSH calculator?              +
How is the APUSH score calculated?                  +
What score do I need for a 5?                       +
Is this an official College Board calculator?       +
Can I use it for older APUSH exams?                 +
```

Only one or two answers should be expanded at a time where practical.

---

# 31. Trust Signals

The page should look credible without pretending to be official.

Include:

```text
✓ Transparent calculation
✓ Year-specific exam configuration
✓ Official-source references
✓ No login required
```

Avoid:

* Fake “official” badges.
* Fake testimonials.
* Fake ratings.
* Fake certification marks.

---

# 32. Disclaimer Design

A small information card:

```text
ⓘ Score Estimate

This calculator provides an educational estimate.
It is not an official College Board score calculator,
and actual AP score conversions may vary.
```

Keep this visible but not visually dominant.

---

# 33. Mobile UX

Mobile should be treated as the primary design, not an afterthought.

### Input spacing

Each input should have generous vertical spacing.

### Sticky result

After calculation, an optional compact sticky bar:

```text
Estimated: 4
Composite: 69.5
[ View Result ]
```

This can help users navigate long pages.

Do not make it cover content.

---

# 34. Mobile Input Keyboard

Use:

```html
inputmode="numeric"
```

for numeric fields.

Users should immediately receive a numeric keypad on supported mobile devices.

---

# 35. Desktop Layout

Recommended maximum content width:

**1100–1200px**

Use a two-column calculation area:

```text
Input: 48%
Result: 52%
```

Do not allow the content to become extremely wide.

---

# 36. Card System

Use consistent cards throughout the product.

Card anatomy:

```text
┌──────────────────────────────┐
│ Title                        │
│ Description                  │
│                              │
│ Content                      │
│                              │
│ Action                       │
└──────────────────────────────┘
```

Use subtle borders/shadows rather than dramatic effects.

---

# 37. Typography

Typography should feel academic and modern.

Recommended hierarchy:

```text
H1
40–48px desktop
32–36px mobile

H2
28–32px

H3
20–24px

Body
16–18px

Helper
13–14px

Result score
72–96px desktop
56–72px mobile
```

Keep line lengths comfortable for reading.

---

# 38. Color System

Use a restrained educational palette.

Suggested semantic categories:

### Primary

Used for:

* Main CTA
* Links
* Interactive elements

### Neutral

Used for:

* Background
* Cards
* Borders
* Secondary text

### Success

Used sparingly for:

* Positive improvement
* Valid states

### Warning

Used for:

* Estimate/disclaimer
* Informational caution

### Error

Used only for actual errors.

Do not color every section differently.

---

# 39. Avoid Excessive Color

The main result should be visually strong without becoming flashy.

Avoid:

```text
MCQ = blue
SAQ = green
DBQ = orange
LEQ = purple
```

This can make the tool look like a children's learning app.

Use consistent neutral styling with limited semantic accents.

---

# 40. Icons

Use simple line icons.

Possible icons:

* Calculator
* Book
* Chart
* Target
* Info
* Check
* Arrow

Never use icons as the only way to communicate meaning.

---

# 41. Button System

### Primary

```text
Calculate My Score
```

### Secondary

```text
Show Breakdown
```

### Tertiary

```text
Reset
```

### Text link

```text
Learn how scoring works →
```

There should be only **one dominant primary CTA** at a time.

---

# 42. Reset Design

Place:

```text
Reset
```

near the calculator header or after the result.

Keep it visually secondary.

Avoid making Reset as prominent as Calculate.

---

# 43. Share Result UI

After a result:

```text
[ Share Result ]
[ Copy Link ]
```

On supported devices, use native share functionality.

Fallback:

> Result link copied.

Do not automatically share scores.

---

# 44. Print Design

Add:

```text
Print Result
```

Optional.

Printed output should contain:

```text
APUSH Score Result
Exam Year
Section Scores
Composite
Estimated Score
Methodology note
Source/disclaimer
```

Hide navigation and advertisements during print.

---

# 45. Accessibility Design

The design must support:

* Keyboard users.
* Screen readers.
* Low-vision users.
* Users who disable animations.

Important:

Do not say:

> Green = good, red = bad.

Instead:

> Strongest Section
> Biggest Opportunity

and use color only as an additional visual cue.

---

# 46. Dynamic Result Accessibility

When the calculation completes, the screen reader should announce:

> “Estimated AP score: 4. Weighted composite: 69.5 out of 100.”

Use an appropriate live region.

---

# 47. Empty State Design

Before calculation:

```text
Your score will appear here

Enter your practice scores
and select Calculate My Score.
```

Do not show:

**AP Score: 0**

That would confuse users.

---

# 48. Partial Input State

If the user has entered some values:

```text
You're almost there

Complete the remaining section scores
to calculate your estimate.
```

Highlight only missing fields.

---

# 49. Loading State

For normal client-side calculation, there should be essentially no visible loading state.

If an API is ever required:

```text
Calculating your estimate…
```

with a very short skeleton/spinner.

Never make a simple calculation feel slow.

---

# 50. Error State

Global errors should be rare.

Example:

```text
We couldn't calculate this result.

Please check your scores and try again.
```

But normal invalid inputs must use field-level errors instead.

---

# 51. Educational Tone

The language should be:

**Clear + encouraging + factual**

Use:

> Nice work — your strongest section is Multiple Choice.

Not:

> You're crushing it! 🔥🔥🔥

Avoid overly childish or exaggerated language.

---

# 52. Result Recommendation Design

Example:

```text
Your Next Step

Your SAQ score is currently your biggest
improvement opportunity.

Try improving by 1 SAQ point and use the
What-If Simulator to see the potential impact.
```

This creates a useful next action.

---

# 53. SEO Content Placement

SEO text should not interfere with the calculator.

Recommended:

```text
Hero
↓
Calculator
↓
Result
↓
Score Breakdown
↓
What-If
↓
Target Score
↓
How APUSH Scoring Works
↓
Historical Data
↓
Related Tools
↓
FAQ
```

This preserves strong UX while still providing substantial indexable content.

---

# 54. Page Length

The calculator itself should be compact.

The page can be long because of educational/SEO sections, but those sections should come **after the core interaction**.

---

# 55. Desktop Result Behavior

Before calculation:

```text
RESULT CARD

Enter your scores to see your result.
```

After calculation:

```text
RESULT CARD

4

69.5 / 100
```

The result should update without page reload.

---

# 56. Animation Guidelines

Use subtle animation:

* Score number fade/scale.
* Progress bar transition.
* Accordion expansion.
* Button state.

Animation duration:

Approximately **150–250ms**.

Respect reduced-motion preferences.

---

# 57. Information Density

The product should not try to show everything simultaneously.

Default:

```text
Simple result
↓
Score breakdown
↓
Optional details
```

Use progressive disclosure for advanced calculations.

This is one of the most important usability principles for the tool.

---

# 58. Recommended First Screen

The user's first viewport should contain:

```text
APUSH Score Calculator

Short explanation

Exam Year

Multiple Choice
SAQ
DBQ
LEQ

Calculate My Score
```

Ideally, the user can start calculating without scrolling.

---

# 59. Recommended Result Screen

The result viewport should contain:

```text
YOUR RESULT

        4

Estimated AP Score

69.5 / 100
Weighted Composite

Estimated Range
3–4

[ See Score Breakdown ]

Strongest Section
Multiple Choice

Biggest Opportunity
SAQ
```

The most important information should be immediately visible.

---

# 60. Final Design System

The final interface should follow this visual hierarchy:

```text
1. APUSH Score Calculator
        ↓
2. Score Inputs
        ↓
3. Calculate My Score
        ↓
4. Estimated AP Score
        ↓
5. Weighted Composite
        ↓
6. Score Breakdown
        ↓
7. What-If Analysis
        ↓
8. Target Score
        ↓
9. Educational Explanation
        ↓
10. Related Tools
        ↓
11. FAQ
```

---

# 61. Final UX Rule

The most important design requirement is:

> **A student should be able to use the calculator without understanding APUSH scoring terminology beforehand.**

The interface should teach them as they use it.

Instead of:

> “Enter normalized raw section values.”

Use:

> **How many did you get correct?**

Instead of:

> “Weighted composite.”

Show:

> **Your Weighted Composite: 69.5 / 100**

and provide a simple “How is this calculated?” explanation.

---

# 62. Final Recommended Visual Concept

The finished tool should feel like:

**Google Calculator simplicity + modern education SaaS clarity + professional academic dashboard**

It should **not** feel like:

**a spreadsheet, a complicated test-prep dashboard, or a generic calculator template.**

The ideal emotional response from the student is:

> “I understand exactly what to enter, and I can see my answer immediately.”

That should be the central design principle for every component on the APUSH Score Calculator.
