// APUSH Score Calculator Client Controller

interface YearCutoffs {
  5: number;
  4: number;
  3: number;
  2: number;
}

const YEAR_CONFIGS: Record<number, { cutoffs: YearCutoffs; label: string; margin: number }> = {
  2026: {
    cutoffs: { 5: 74, 4: 60, 3: 47, 2: 35 },
    label: '2026 Curve',
    margin: 2.5,
  },
  2027: {
    cutoffs: { 5: 75, 4: 61, 3: 48, 2: 36 },
    label: '2027 Projected Curve',
    margin: 3.0,
  },
};

const SECTION_MAX = {
  mcq: 55,
  saq: 9,
  dbq: 7,
  leq: 6,
};

const SECTION_WEIGHTS = {
  mcq: 40,
  saq: 20,
  dbq: 25,
  leq: 15,
};

const TITLES: Record<number, { title: string; credit: string; color: string; badgeBg: string; badgeText: string }> = {
  5: {
    title: 'Extremely Well Qualified',
    credit: 'Extremely Likely',
    color: '#059669', // emerald-600
    badgeBg: '#ecfdf5',
    badgeText: '#047857',
  },
  4: {
    title: 'Well Qualified',
    credit: 'Very Likely',
    color: '#2563eb', // blue-600
    badgeBg: '#eff6ff',
    badgeText: '#1d4ed8',
  },
  3: {
    title: 'Qualified (Passing)',
    credit: 'Likely / Variable',
    color: '#0284c7', // sky-600
    badgeBg: '#f0f9ff',
    badgeText: '#0369a1',
  },
  2: {
    title: 'Possibly Qualified',
    credit: 'Rare',
    color: '#d97706', // amber-600
    badgeBg: '#fffbeb',
    badgeText: '#b45309',
  },
  1: {
    title: 'No Recommendation',
    credit: 'No Credit',
    color: '#e11d48', // rose-600
    badgeBg: '#fff1f2',
    badgeText: '#be123c',
  },
};

export class ApushCalculatorApp {
  private activeYear = 2026;
  private scores = { mcq: 42, saq: 5, dbq: 5, leq: 4 };

  init() {
    this.parseUrlParams();
    this.attachEventListeners();
    this.recalculate();
  }

  private parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const yr = parseInt(params.get('year') || '', 10);
    if (yr && (yr === 2026 || yr === 2027)) {
      this.activeYear = yr;
    }

    const mcq = parseInt(params.get('mcq') || '', 10);
    const saq = parseInt(params.get('saq') || '', 10);
    const dbq = parseInt(params.get('dbq') || '', 10);
    const leq = parseInt(params.get('leq') || '', 10);

    if (!isNaN(mcq)) this.scores.mcq = Math.max(0, Math.min(SECTION_MAX.mcq, mcq));
    if (!isNaN(saq)) this.scores.saq = Math.max(0, Math.min(SECTION_MAX.saq, saq));
    if (!isNaN(dbq)) this.scores.dbq = Math.max(0, Math.min(SECTION_MAX.dbq, dbq));
    if (!isNaN(leq)) this.scores.leq = Math.max(0, Math.min(SECTION_MAX.leq, leq));

    this.syncInputsFromState();
  }

  private syncInputsFromState() {
    (['mcq', 'saq', 'dbq', 'leq'] as const).forEach((key) => {
      const numInput = document.getElementById(`score-input-${key}`) as HTMLInputElement | null;
      const rangeInput = document.getElementById(`score-slider-${key}`) as HTMLInputElement | null;
      const currentValSpan = rangeInput?.parentElement?.querySelector('.current-val');

      if (numInput) numInput.value = this.scores[key].toString();
      if (rangeInput) rangeInput.value = this.scores[key].toString();
      if (currentValSpan) currentValSpan.textContent = this.scores[key].toString();
    });

    // Update Year selector buttons
    document.querySelectorAll('.year-toggle-btn').forEach((btn) => {
      const yr = parseInt(btn.getAttribute('data-year-btn') || '', 10);
      if (yr === this.activeYear) {
        btn.classList.add('bg-blue-700', 'text-white', 'shadow-xs');
        btn.classList.remove('text-neutral-600', 'hover:text-neutral-900', 'hover:bg-neutral-50');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('bg-blue-700', 'text-white', 'shadow-xs');
        btn.classList.add('text-neutral-600', 'hover:text-neutral-900', 'hover:bg-neutral-50');
        btn.setAttribute('aria-checked', 'false');
      }
    });
  }

  private attachEventListeners() {
    // Number inputs and Range sliders
    (['mcq', 'saq', 'dbq', 'leq'] as const).forEach((key) => {
      const numInput = document.getElementById(`score-input-${key}`) as HTMLInputElement | null;
      const rangeInput = document.getElementById(`score-slider-${key}`) as HTMLInputElement | null;
      const currentValSpan = rangeInput?.parentElement?.querySelector('.current-val');

      if (numInput && rangeInput) {
        numInput.addEventListener('input', () => {
          let val = parseInt(numInput.value, 10);
          if (isNaN(val)) val = 0;
          val = Math.max(0, Math.min(SECTION_MAX[key], val));
          this.scores[key] = val;
          rangeInput.value = val.toString();
          if (currentValSpan) currentValSpan.textContent = val.toString();
          this.recalculate();
        });

        rangeInput.addEventListener('input', () => {
          const val = parseInt(rangeInput.value, 10);
          this.scores[key] = val;
          numInput.value = val.toString();
          if (currentValSpan) currentValSpan.textContent = val.toString();
          this.recalculate();
        });
      }
    });

    // Step buttons (+ and -)
    document.querySelectorAll('.step-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        if (!targetId) return;
        const input = document.getElementById(targetId) as HTMLInputElement | null;
        if (!input) return;

        const key = targetId.replace('score-input-', '') as 'mcq' | 'saq' | 'dbq' | 'leq';
        let current = parseInt(input.value, 10) || 0;

        if (btn.classList.contains('step-up')) {
          current = Math.min(SECTION_MAX[key], current + 1);
        } else if (btn.classList.contains('step-down')) {
          current = Math.max(0, current - 1);
        }

        input.value = current.toString();
        this.scores[key] = current;

        const slider = document.getElementById(`score-slider-${key}`) as HTMLInputElement | null;
        const currentValSpan = slider?.parentElement?.querySelector('.current-val');
        if (slider) slider.value = current.toString();
        if (currentValSpan) currentValSpan.textContent = current.toString();

        this.recalculate();
      });
    });

    // Year Toggle buttons
    document.querySelectorAll('.year-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const yr = parseInt(btn.getAttribute('data-year-btn') || '', 10);
        if (yr && (yr === 2026 || yr === 2027)) {
          this.activeYear = yr;
          this.syncInputsFromState();
          this.recalculate();
        }
      });
    });

    // Preset buttons
    document.querySelectorAll('.preset-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        if (preset === 'five') {
          this.scores = { mcq: 48, saq: 8, dbq: 6, leq: 5 };
        } else if (preset === 'four') {
          this.scores = { mcq: 42, saq: 6, dbq: 5, leq: 4 };
        } else if (preset === 'three') {
          this.scores = { mcq: 34, saq: 4, dbq: 4, leq: 3 };
        }
        this.syncInputsFromState();
        this.recalculate();
      });
    });

    // Copy Link button
    const copyBtn = document.getElementById('copy-link-btn');
    const copyText = document.getElementById('copy-btn-text');
    if (copyBtn && copyText) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          const orig = copyText.textContent;
          copyText.textContent = 'Link Copied! ✓';
          setTimeout(() => {
            copyText.textContent = orig;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy link', err);
        }
      });
    }

    // Print button
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Reset button
    const resetBtn = document.getElementById('reset-calculator-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.scores = { mcq: 42, saq: 5, dbq: 5, leq: 4 };
        this.syncInputsFromState();
        this.recalculate();
      });
    }

    // What-If Simulator Scenario buttons
    document.querySelectorAll('.scenario-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const scenario = btn.getAttribute('data-scenario');
        this.previewScenario(scenario);
      });
    });

    // Apply What-If button
    const applySimBtn = document.getElementById('apply-sim-to-calc');
    if (applySimBtn) {
      applySimBtn.addEventListener('click', () => {
        this.applyActiveScenario();
      });
    }

    // Reset What-If Simulator
    const resetSimBtn = document.getElementById('what-if-reset-btn');
    if (resetSimBtn) {
      resetSimBtn.addEventListener('click', () => {
        this.previewScenario(null);
      });
    }

    // Target Score Calculator listeners
    const targetScoreSelect = document.getElementById('target-score-select');
    const targetSectionSelect = document.getElementById('target-section-select');
    if (targetScoreSelect && targetSectionSelect) {
      targetScoreSelect.addEventListener('change', () => this.updateTargetCalculator());
      targetSectionSelect.addEventListener('change', () => this.updateTargetCalculator());
    }
  }

  private pendingScenarioScores: typeof this.scores | null = null;

  private previewScenario(scenario: string | null) {
    if (!scenario) {
      this.pendingScenarioScores = null;
      const simBox = document.getElementById('simulated-result-box');
      if (simBox) simBox.classList.add('opacity-50');
      return;
    }

    const simScores = { ...this.scores };
    if (scenario === 'dbq-plus-2') {
      simScores.dbq = Math.min(SECTION_MAX.dbq, simScores.dbq + 2);
    } else if (scenario === 'mcq-plus-5') {
      simScores.mcq = Math.min(SECTION_MAX.mcq, simScores.mcq + 5);
    } else if (scenario === 'saq-plus-3') {
      simScores.saq = SECTION_MAX.saq;
    } else if (scenario === 'leq-plus-2') {
      simScores.leq = Math.min(SECTION_MAX.leq, simScores.leq + 2);
    }

    this.pendingScenarioScores = simScores;

    // Calculate simulated results
    const currentComp = this.calcComposite(this.scores);
    const simComp = this.calcComposite(simScores);
    const simScore = this.determineScore(simComp);
    const compDiff = (simComp - currentComp).toFixed(1);

    const simScoreNum = document.getElementById('sim-score-num');
    const simCompText = document.getElementById('sim-composite-text');
    const simImpactMsg = document.getElementById('sim-impact-msg');
    const simBox = document.getElementById('simulated-result-box');

    if (simBox) simBox.classList.remove('opacity-50');
    if (simScoreNum) simScoreNum.textContent = simScore.toString();
    if (simCompText) {
      simCompText.textContent = `Composite: ${simComp.toFixed(1)} (+${compDiff} pts)`;
    }

    const currentScore = this.determineScore(currentComp);
    if (simImpactMsg) {
      if (simScore > currentScore) {
        simImpactMsg.textContent = `🎉 Score increases from ${currentScore} to ${simScore}!`;
        simImpactMsg.className = 'text-xs text-emerald-700 font-bold';
      } else {
        simImpactMsg.textContent = `Gain of +${compDiff} composite points (reinforces Score ${simScore}).`;
        simImpactMsg.className = 'text-xs text-blue-700 font-medium';
      }
    }
  }

  private applyActiveScenario() {
    if (this.pendingScenarioScores) {
      this.scores = { ...this.pendingScenarioScores };
      this.pendingScenarioScores = null;
      this.syncInputsFromState();
      this.recalculate();
    }
  }

  private calcComposite(scores: typeof this.scores): number {
    const mcqW = (scores.mcq / SECTION_MAX.mcq) * SECTION_WEIGHTS.mcq;
    const saqW = (scores.saq / SECTION_MAX.saq) * SECTION_WEIGHTS.saq;
    const dbqW = (scores.dbq / SECTION_MAX.dbq) * SECTION_WEIGHTS.dbq;
    const leqW = (scores.leq / SECTION_MAX.leq) * SECTION_WEIGHTS.leq;
    return Math.round((mcqW + saqW + dbqW + leqW) * 100) / 100;
  }

  private determineScore(composite: number): 1 | 2 | 3 | 4 | 5 {
    const c = YEAR_CONFIGS[this.activeYear].cutoffs;
    if (composite >= c[5]) return 5;
    if (composite >= c[4]) return 4;
    if (composite >= c[3]) return 3;
    if (composite >= c[2]) return 2;
    return 1;
  }

  recalculate() {
    const { mcq, saq, dbq, leq } = this.scores;
    const config = YEAR_CONFIGS[this.activeYear];

    // Calculate individual weighted components
    const mcqWeighted = Math.round(((mcq / SECTION_MAX.mcq) * SECTION_WEIGHTS.mcq) * 10) / 10;
    const saqWeighted = Math.round(((saq / SECTION_MAX.saq) * SECTION_WEIGHTS.saq) * 10) / 10;
    const dbqWeighted = Math.round(((dbq / SECTION_MAX.dbq) * SECTION_WEIGHTS.dbq) * 10) / 10;
    const leqWeighted = Math.round(((leq / SECTION_MAX.leq) * SECTION_WEIGHTS.leq) * 10) / 10;

    const totalRaw = mcq + saq + dbq + leq;
    const compositeScore = Math.round((mcqWeighted + saqWeighted + dbqWeighted + leqWeighted) * 10) / 10;
    const apScore = this.determineScore(compositeScore);
    const meta = TITLES[apScore];

    // Update URL without page reload
    const searchParams = new URLSearchParams({
      year: this.activeYear.toString(),
      mcq: mcq.toString(),
      saq: saq.toString(),
      dbq: dbq.toString(),
      leq: leq.toString(),
    });
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);

    // Update Result Card DOM
    const heroNum = document.getElementById('hero-score-number');
    const statusTitle = document.getElementById('result-status-title');
    const qualBadge = document.getElementById('qualification-badge');
    const qualText = document.getElementById('qualification-text');
    const passIndicator = document.getElementById('pass-fail-indicator');
    const compVal = document.getElementById('composite-score-val');
    const creditVal = document.getElementById('credit-likelihood-val');
    const accentBar = document.getElementById('score-accent-bar');
    const activeCurveLabel = document.getElementById('active-curve-year-label');

    if (heroNum) heroNum.textContent = apScore.toString();
    if (statusTitle) statusTitle.textContent = meta.title;
    if (qualText) qualText.textContent = `Score ${apScore}`;
    if (compVal) compVal.textContent = compositeScore.toFixed(1);
    if (creditVal) creditVal.textContent = meta.credit;
    if (accentBar) accentBar.style.backgroundColor = meta.color;
    if (activeCurveLabel) activeCurveLabel.textContent = this.activeYear.toString();

    if (qualBadge) {
      qualBadge.style.backgroundColor = meta.badgeBg;
      qualBadge.style.color = meta.badgeText;
    }

    if (passIndicator) {
      if (apScore >= 3) {
        passIndicator.textContent = 'Passing (College Credit)';
        passIndicator.className = 'text-emerald-700 font-bold text-xs mt-0.5';
      } else {
        passIndicator.textContent = 'Below Passing (Needs 47+ composite)';
        passIndicator.className = 'text-rose-600 font-bold text-xs mt-0.5';
      }
    }

    // Points to next score banner
    const nextBanner = document.getElementById('next-tier-banner');
    const pointsToNext = document.getElementById('points-to-next-tier');
    if (apScore < 5) {
      const nextCutoff = config.cutoffs[(apScore + 1) as 2 | 3 | 4 | 5];
      const gap = Math.max(0, Math.round((nextCutoff - compositeScore) * 10) / 10);
      if (nextBanner) nextBanner.classList.remove('hidden');
      if (pointsToNext) pointsToNext.textContent = gap.toFixed(1);
    } else {
      if (nextBanner) nextBanner.classList.add('hidden');
    }

    // Confidence range
    const confRange = document.getElementById('confidence-range-text');
    if (confRange) {
      const low = Math.max(0, compositeScore - config.margin).toFixed(1);
      const high = Math.min(100, compositeScore + config.margin).toFixed(1);
      confRange.textContent = `${low} – ${high} composite`;
    }

    // Scale pin
    const pin = document.getElementById('scale-marker-pin');
    const pinLabel = document.getElementById('scale-marker-label');
    if (pin) pin.style.left = `${Math.min(100, Math.max(0, compositeScore))}%`;
    if (pinLabel) pinLabel.textContent = compositeScore.toFixed(1);

    // Breakdown Table DOM
    this.updateElementText('breakdown-raw-mcq', mcq.toString());
    this.updateElementText('breakdown-raw-saq', saq.toString());
    this.updateElementText('breakdown-raw-dbq', dbq.toString());
    this.updateElementText('breakdown-raw-leq', leq.toString());

    this.updateElementText('breakdown-pct-mcq', ((mcq / SECTION_MAX.mcq) * 100).toFixed(1));
    this.updateElementText('breakdown-pct-saq', ((saq / SECTION_MAX.saq) * 100).toFixed(1));
    this.updateElementText('breakdown-pct-dbq', ((dbq / SECTION_MAX.dbq) * 100).toFixed(1));
    this.updateElementText('breakdown-pct-leq', ((leq / SECTION_MAX.leq) * 100).toFixed(1));

    this.updateElementText('breakdown-weighted-mcq', mcqWeighted.toFixed(1));
    this.updateElementText('breakdown-weighted-saq', saqWeighted.toFixed(1));
    this.updateElementText('breakdown-weighted-dbq', dbqWeighted.toFixed(1));
    this.updateElementText('breakdown-weighted-leq', leqWeighted.toFixed(1));

    this.updateElementText('breakdown-total-raw', totalRaw.toString());
    this.updateElementText('breakdown-total-pct', ((totalRaw / 77) * 100).toFixed(1));
    this.updateElementText('breakdown-total-weighted', compositeScore.toFixed(1));

    // Update breakdown progress bars
    this.updateBarStyle('breakdown-bar-mcq', (mcq / SECTION_MAX.mcq) * 100);
    this.updateBarStyle('breakdown-bar-saq', (saq / SECTION_MAX.saq) * 100);
    this.updateBarStyle('breakdown-bar-dbq', (dbq / SECTION_MAX.dbq) * 100);
    this.updateBarStyle('breakdown-bar-leq', (leq / SECTION_MAX.leq) * 100);

    // Update recommendations
    this.updateRecommendations(apScore, compositeScore);

    // Update target calculator
    this.updateTargetCalculator();
  }

  private updateElementText(id: string, text: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  private updateBarStyle(id: string, pct: number) {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }

  private updateRecommendations(apScore: number, composite: number) {
    const textEl = document.getElementById('analysis-recommendation-text');
    if (!textEl) return;

    if (apScore === 5) {
      textEl.textContent = 'Outstanding performance! You are solidly within the 5 range. Keep up timed practice and review foundational chronology to maintain sharp recall.';
    } else {
      const nextScore = apScore + 1;
      const config = YEAR_CONFIGS[this.activeYear];
      const gap = (config.cutoffs[nextScore as 2 | 3 | 4 | 5] - composite).toFixed(1);
      const dbqPts = Math.ceil(parseFloat(gap) / (25 / 7));
      textEl.textContent = `Fastest route to a ${nextScore}: You need ${gap} more composite points. Earning just ${dbqPts} more point${dbqPts > 1 ? 's' : ''} on the DBQ or +${Math.ceil(parseFloat(gap) / (40 / 55))} MCQ questions will push you across the threshold!`;
    }
  }

  private updateTargetCalculator() {
    const targetSelect = document.getElementById('target-score-select') as HTMLSelectElement | null;
    const sectionSelect = document.getElementById('target-section-select') as HTMLSelectElement | null;
    const msgEl = document.getElementById('target-output-message');
    const neededDisplay = document.getElementById('target-needed-score-display');

    if (!targetSelect || !sectionSelect || !msgEl || !neededDisplay) return;

    const targetScore = parseInt(targetSelect.value, 10) as 3 | 4 | 5;
    const targetSec = sectionSelect.value as 'mcq' | 'saq' | 'dbq' | 'leq';
    const config = YEAR_CONFIGS[this.activeYear];
    const cutoff = config.cutoffs[targetScore];

    // Calculate other sections' composite points
    let otherComposite = 0;
    (['mcq', 'saq', 'dbq', 'leq'] as const).forEach((sec) => {
      if (sec !== targetSec) {
        otherComposite += (this.scores[sec] / SECTION_MAX[sec]) * SECTION_WEIGHTS[sec];
      }
    });

    const neededComp = Math.max(0, cutoff - otherComposite);
    const mult = SECTION_WEIGHTS[targetSec] / SECTION_MAX[targetSec];
    const rawNeeded = Math.ceil(neededComp / mult);
    const maxRaw = SECTION_MAX[targetSec];

    if (rawNeeded <= 0) {
      neededDisplay.textContent = `0 / ${maxRaw}`;
      msgEl.innerHTML = `You have already secured enough points from other sections to reach a score of <strong>${targetScore}</strong>!`;
    } else if (rawNeeded <= maxRaw) {
      neededDisplay.textContent = `${rawNeeded} / ${maxRaw}`;
      msgEl.innerHTML = `With your current scores in other sections, you need at least <strong class="font-extrabold text-indigo-900 text-sm">${rawNeeded} / ${maxRaw} on ${targetSec.toUpperCase()}</strong> to reach an AP score of ${targetScore}.`;
    } else {
      neededDisplay.textContent = `> ${maxRaw}`;
      msgEl.innerHTML = `Even with a perfect score of ${maxRaw}/${maxRaw} on ${targetSec.toUpperCase()}, you would still be ${(neededComp - maxRaw * mult).toFixed(1)} points short. You must improve other sections as well.`;
    }
  }
}
