import { Category, EliminationStep } from '../types/game.types';

/**
 * Flattens all non-eliminated options into a counting sequence
 * while preserving category/option index mapping
 */
export function buildCountingSequence(categories: Category[]): EliminationStep[] {
  const sequence: EliminationStep[] = [];

  for (let catIdx = 0; catIdx < categories.length; catIdx++) {
    const category = categories[catIdx];
    const activeOptions = category.options.filter(opt => !opt.eliminated);

    if (activeOptions.length === 0) continue;

    for (let optIdx = 0; optIdx < category.options.length; optIdx++) {
      const option = category.options[optIdx];
      if (!option.eliminated) {
        const canEliminate = activeOptions.length > 1;
        sequence.push({
          categoryIndex: catIdx,
          optionIndex: optIdx,
          shouldEliminate: canEliminate,
        });
      }
    }
  }

  return sequence;
}

/**
 * Determines which option to eliminate based on dice value
 * Returns the step in the sequence to eliminate
 */
export function findEliminationTarget(
  sequence: EliminationStep[],
  startIndex: number,
  diceValue: number
): { step: EliminationStep; sequenceIndex: number } | null {
  if (sequence.length === 0) return null;

  // Count through sequence, wrapping around
  let count = 0;
  let currentIndex = startIndex;

  while (count < diceValue) {
    currentIndex = (currentIndex + 1) % sequence.length;
    count++;
  }

  // Find the target to eliminate (must have shouldEliminate = true)
  // If we land on a non-eliminable option, advance to the next eliminable one
  let searchAttempts = 0;
  while (!sequence[currentIndex].shouldEliminate && searchAttempts < sequence.length) {
    currentIndex = (currentIndex + 1) % sequence.length;
    searchAttempts++;
  }

  // If no eliminable option found, return null
  if (!sequence[currentIndex].shouldEliminate) {
    return null;
  }

  return {
    step: sequence[currentIndex],
    sequenceIndex: currentIndex,
  };
}

/**
 * Checks if game is complete (all categories have 1 option)
 */
export function isGameComplete(categories: Category[]): boolean {
  return categories.every(cat =>
    cat.options.filter(opt => !opt.eliminated).length === 1
  );
}

/**
 * Gets final results (remaining options per category)
 */
export function getFinalResults(categories: Category[]): Record<string, string> {
  const results: Record<string, string> = {};

  categories.forEach(cat => {
    const remaining = cat.options.find(opt => !opt.eliminated);
    if (remaining) {
      results[cat.name] = remaining.text;
    }
  });

  return results;
}
