import { ALL_SUBJECTS, getSubjectById } from '../../data/exam-config/subjects-registry.ts';
import { calculateSubjectScore, simulateWhatIf, calculateTargetScenarios } from './engine.ts';

console.log('Testing unified scoring engine across all 8 AP subjects...\n');

let passCount = 0;
let failCount = 0;

for (const sub of ALL_SUBJECTS) {
  console.log(`=== Subject: ${sub.name} (${sub.abbreviation}) ===`);

  // Test 1: Max Score -> should yield 100 composite and Score 5
  const maxScores: Record<string, number> = {};
  for (const s of sub.examYears[sub.defaultYear].sections) {
    maxScores[s.id] = s.maxScore;
  }
  const maxResult = calculateSubjectScore(sub, sub.defaultYear, maxScores);
  if (Math.round(maxResult.compositeScore) === 100 && maxResult.estimatedApScore === 5) {
    console.log(`  ✓ Max score test passed: 100 composite -> Score 5`);
    passCount++;
  } else {
    console.error(`  ✗ Max score test failed: composite=${maxResult.compositeScore}, score=${maxResult.estimatedApScore}`);
    failCount++;
  }

  // Test 2: Zero Score -> should yield 0 composite and Score 1
  const zeroScores: Record<string, number> = {};
  for (const s of sub.examYears[sub.defaultYear].sections) {
    zeroScores[s.id] = 0;
  }
  const zeroResult = calculateSubjectScore(sub, sub.defaultYear, zeroScores);
  if (zeroResult.compositeScore === 0 && zeroResult.estimatedApScore === 1) {
    console.log(`  ✓ Zero score test passed: 0 composite -> Score 1`);
    passCount++;
  } else {
    console.error(`  ✗ Zero score test failed: composite=${zeroResult.compositeScore}, score=${zeroResult.estimatedApScore}`);
    failCount++;
  }

  // Test 3: Default Preset Test
  const defaultScores = sub.examYears[sub.defaultYear].defaultScores;
  const defResult = calculateSubjectScore(sub, sub.defaultYear, defaultScores);
  console.log(`  ✓ Default score test: Composite=${defResult.compositeScore}, Score=${defResult.estimatedApScore}`);
  passCount++;

  // Test 4: What-If simulation
  const firstSec = sub.examYears[sub.defaultYear].sections[0];
  const whatIf = simulateWhatIf(sub, sub.defaultYear, defaultScores, firstSec.id, 2);
  console.log(`  ✓ What-If test (+2 on ${firstSec.shortName}): base=${whatIf.baseComposite} -> new=${whatIf.newComposite} (delta=+${whatIf.deltaComposite})`);
  passCount++;

  // Test 5: Target Score calculation
  const target = calculateTargetScenarios(sub, sub.defaultYear, zeroScores, 4);
  console.log(`  ✓ Target Score test (Target 4 from 0): Deficit=${target.compositeDeficit}`);
  passCount++;
}

console.log(`\nResults: ${passCount} passed, ${failCount} failed.`);
if (failCount > 0) process.exit(1);
