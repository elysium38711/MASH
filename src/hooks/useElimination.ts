import { useState, useCallback, useRef } from 'react';
import { Category } from '../types/game.types';
import {
  buildCountingSequence,
  findEliminationTarget,
  isGameComplete,
} from '../utils/eliminationEngine';

export function useElimination(
  categories: Category[],
  setCategories: (cats: Category[]) => void,
  onComplete: () => void
) {
  const [isAnimating, setIsAnimating] = useState(false);
  const shouldSkipRef = useRef(false);
  const [currentHighlight, setCurrentHighlight] = useState<{
    categoryIndex: number;
    optionIndex: number;
  } | null>(null);

  const startElimination = useCallback(
    async (diceValue: number) => {
      setIsAnimating(true);
      shouldSkipRef.current = false;

      let currentCategories = [...categories];
      let sequenceIndex = 0;

      // Continue until game complete
      while (!isGameComplete(currentCategories)) {
        const sequence = buildCountingSequence(currentCategories);
        const target = findEliminationTarget(sequence, sequenceIndex, diceValue);

        if (!target) break;

        // If skip is requested, eliminate immediately without animation
        if (!shouldSkipRef.current) {
          // Animate counting from current position to target
          const startIdx = sequenceIndex;
          const endIdx = target.sequenceIndex;

          // Calculate total steps considering wrap-around
          let totalSteps: number;
          if (endIdx >= startIdx) {
            totalSteps = endIdx - startIdx;
          } else {
            totalSteps = sequence.length - startIdx + endIdx;
          }

          // Visual countdown with 150ms per step
          for (let i = 0; i <= totalSteps; i++) {
            if (shouldSkipRef.current) break;

            const currentIdx = (startIdx + i) % sequence.length;
            const step = sequence[currentIdx];

            setCurrentHighlight({
              categoryIndex: step.categoryIndex,
              optionIndex: step.optionIndex,
            });

            await new Promise((resolve) => setTimeout(resolve, 150));
          }
        }

        // Eliminate the target option
        const updatedCategories = currentCategories.map((cat, catIdx) => {
          if (catIdx === target.step.categoryIndex) {
            return {
              ...cat,
              options: cat.options.map((opt, optIdx) => {
                if (optIdx === target.step.optionIndex) {
                  return { ...opt, eliminated: true };
                }
                return opt;
              }),
            };
          }
          return cat;
        });

        currentCategories = updatedCategories;
        setCategories(updatedCategories);
        sequenceIndex = target.sequenceIndex;

        // Pause after elimination
        if (!shouldSkipRef.current) {
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }

      setCurrentHighlight(null);
      setIsAnimating(false);
      shouldSkipRef.current = false;
      onComplete();
    },
    [categories, setCategories, onComplete]
  );

  const skipAnimation = useCallback(() => {
    shouldSkipRef.current = true;
  }, []);

  return {
    isAnimating,
    currentHighlight,
    startElimination,
    skipAnimation,
  };
}
