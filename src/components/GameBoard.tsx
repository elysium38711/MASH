import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { useElimination } from '../hooks/useElimination';
import { DiceRoller } from './DiceRoller';
import { CategoryDisplay } from './CategoryDisplay';
import { ResultsModal } from './ResultsModal';
import { getFinalResults } from '../utils/eliminationEngine';
import './GameBoard.css';

export function GameBoard() {
  const { gameState, setCategories, setIsComplete, resetGame } = useGame();
  const [hasRolled, setHasRolled] = useState(false);
  const [showingResult, setShowingResult] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);

  const { isAnimating, currentHighlight, startElimination, skipAnimation } = useElimination(
    gameState.categories,
    setCategories,
    () => setIsComplete(true)
  );

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

  const finalResults = gameState.isComplete
    ? getFinalResults(gameState.categories)
    : {};

  return (
    <div className="game-board fade-in">
      <h1 className="handwritten-title">MASH</h1>

      {!hasRolled && <DiceRoller onRollComplete={handleRollComplete} disabled={isAnimating || showingResult} />}

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

      <ResultsModal
        isOpen={gameState.isComplete}
        results={finalResults}
        onClose={resetGame}
      />
    </div>
  );
}
