import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { useElimination } from '../hooks/useElimination';
import { animatedDiceRoll } from '../utils/randomDice';
import { DiceRoller } from './DiceRoller';
import { CategoryDisplay } from './CategoryDisplay';
import './GameBoard.css';

export function GameBoard() {
  const { gameState, setCategories, setIsComplete } = useGame();
  const [hasRolled, setHasRolled] = useState(false);
  const [showingResult, setShowingResult] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);

  // Lifted state for dice rolling
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [lastRoll, setLastRoll] = useState<number | null>(null);

  const { isAnimating, currentHighlight, startElimination, skipAnimation } = useElimination(
    gameState.categories,
    setCategories,
    () => setIsComplete(true)
  );

  const handleStartRoll = async () => {
    if (isRolling || showingResult) return;

    setIsRolling(true);
    const finalValue = await animatedDiceRoll(
      (value) => setDiceValue(value),
      1500
    );
    setIsRolling(false);
    setLastRoll(finalValue);
    handleRollComplete(finalValue);
  };

  const handleRollComplete = (value: number) => {
    setShowingResult(true);
    setDiceResult(value);

    // Wait 3 seconds to show the dice result before starting elimination
    setTimeout(() => {
      setHasRolled(true);
      setShowingResult(false);
      startElimination(value);
    }, 3000);
  };

  return (
    <div className="game-board fade-in">
      <h1 className="handwritten-title">MASH</h1>

      {!hasRolled && (
        <DiceRoller
          diceValue={diceValue}
          isRolling={isRolling}
          lastRoll={lastRoll}
          onRoll={handleStartRoll}
          disabled={isAnimating || showingResult || isRolling}
        />
      )}

      {diceResult !== null && hasRolled && (
        <>
          <div className="dice-result-display">
            <p className="dice-result-text">Counting by: {diceResult}</p>
          </div>

          {isAnimating && (
            <button onClick={skipAnimation} className="skip-animation-button">
              Skip Animation
            </button>
          )}
        </>
      )}

      <div className="categories-grid">
        {gameState.categories.map((category, index) => (
          <CategoryDisplay
            key={category.id}
            category={category}
            categoryIndex={index}
            currentHighlight={currentHighlight || undefined}
          />
        ))}
      </div>
    </div>
  );
}
