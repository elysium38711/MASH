import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { getFinalResults } from '../utils/eliminationEngine';
import { ResultsDisplay } from './ResultsDisplay';

export function ResultsRoute() {
  const navigate = useNavigate();
  const { gameState, resetGame } = useGame();

  const handlePlayAgain = () => {
    resetGame();
    navigate('/');
  };

  useEffect(() => {
    // Redirect if no game has been played
    if (!gameState.isComplete || gameState.categories.length === 0) {
      navigate('/');
    }
  }, [gameState.isComplete, gameState.categories.length, navigate]);

  if (!gameState.isComplete || gameState.categories.length === 0) {
    return null;
  }

  const finalResults = getFinalResults(gameState.categories);

  return <ResultsDisplay results={finalResults} onPlayAgain={handlePlayAgain} />;
}
