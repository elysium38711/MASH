import { useGame } from '../contexts/GameContext';
import { GameMode } from '../types/game.types';
import './GameModeSelector.css';

export function GameModeSelector() {
  const { setMode } = useGame();

  const handleModeSelect = (mode: GameMode) => {
    setMode(mode);
  };

  return (
    <div className="game-mode-selector fade-in">
      <h1 className="handwritten-title">MASH</h1>
      <p className="subtitle">Choose Your Game Mode</p>

      <div className="mode-buttons">
        <button
          className="mode-button"
          onClick={() => handleModeSelect('custom-only')}
        >
          <h3>Custom Only</h3>
          <p>Create your own categories and options from scratch</p>
        </button>

        <button
          className="mode-button"
          onClick={() => handleModeSelect('default-custom')}
        >
          <h3>Default + Custom</h3>
          <p>Start with classic MASH categories, then edit or add your own</p>
        </button>

        <button
          className="mode-button"
          onClick={() => handleModeSelect('default-only')}
        >
          <h3>Default Only</h3>
          <p>Play with the classic MASH categories</p>
        </button>
      </div>
    </div>
  );
}
