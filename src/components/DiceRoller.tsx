import './DiceRoller.css';

interface DiceRollerProps {
  diceValue: number | null;
  isRolling: boolean;
  lastRoll: number | null;
  onRoll: () => void;
  disabled: boolean;
}

export function DiceRoller({ diceValue, isRolling, lastRoll, onRoll, disabled }: DiceRollerProps) {
  return (
    <div className="dice-roller">
      <h2 className="dice-title">Roll the Die</h2>
      <div className={`dice-display ${isRolling ? 'dice-rolling' : ''}`}>
        {diceValue !== null ? diceValue : '?'}
      </div>
      {lastRoll !== null && !isRolling && (
        <p className="dice-result">You rolled a {lastRoll}!</p>
      )}
      <button
        onClick={onRoll}
        disabled={disabled}
        className="roll-button"
      >
        {isRolling ? 'Rolling...' : 'Roll D20'}
      </button>
    </div>
  );
}
