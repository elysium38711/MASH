import { useNavigate } from 'react-router-dom';
import './GameModeSelector.css';

export function GameModeSelector() {
  const navigate = useNavigate();

  return (
    <div className="game-mode-selector fade-in">
      <div className="header-row">
        <h1 className="handwritten-title">MASH-IT</h1>
        <p className="subtitle">Choose Your Game Mode</p>
      </div>

      <div className="mode-buttons">
        <button
          className="mode-button"
          onClick={() => navigate('/custom')}
        >
          <h3>Custom Only</h3>
          <p>Create your own categories and options from scratch</p>
        </button>

        <button
          className="mode-button"
          onClick={() => navigate('/def_cust')}
        >
          <h3>Default + Custom</h3>
          <p>Start with classic MASH-IT categories, then edit or add your own</p>
        </button>

        <button
          className="mode-button"
          onClick={() => navigate('/default')}
        >
          <h3>Default Only</h3>
          <p>Play with the classic MASH-IT categories</p>
        </button>
      </div>
    </div>
  );
}
