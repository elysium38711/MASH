import { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { GameMode } from '../types/game.types';
import { CategoryEditor } from './CategoryEditor';

interface CategoryEditorRouteProps {
  mode: GameMode;
}

export function CategoryEditorRoute({ mode }: CategoryEditorRouteProps) {
  const { gameState, setMode } = useGame();

  useEffect(() => {
    // Initialize the mode if not already set or if different
    if (gameState.mode !== mode) {
      setMode(mode);
    }
  }, [mode, gameState.mode, setMode]);

  // Don't render until mode is initialized
  if (gameState.mode !== mode) {
    return null;
  }

  return <CategoryEditor />;
}
