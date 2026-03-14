import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { GameBoard } from './GameBoard';

export function GameplayRoute() {
  const navigate = useNavigate();
  const { gameState } = useGame();

  useEffect(() => {
    // Redirect to home if no categories are set (direct URL access)
    if (gameState.categories.length === 0) {
      navigate('/');
    }
  }, [gameState.categories.length, navigate]);

  useEffect(() => {
    // Navigate to results when game completes
    if (gameState.isComplete) {
      navigate('/results');
    }
  }, [gameState.isComplete, navigate]);

  if (gameState.categories.length === 0) {
    return null;
  }

  return <GameBoard />;
}
