import { useState } from 'react';
import { animatedDiceRoll } from '../utils/randomDice';
import './DiceRoller.css';

interface DiceRollerProps {
  onRollComplete: (value: number) => void;
  disabled: boolean;
}

export function DiceRoller({ onRollComplete, disabled }: DiceRollerProps) {
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [lastRoll, setLastRoll] = useState<number | null>(null);

  const handleRoll = async () => {
    setIsRolling(true);

    const finalValue = await animatedDiceRoll(
      (value) => setDiceValue(value),
      1500
    );

    setIsRolling(false);
    setLastRoll(finalValue);
    onRollComplete(finalValue);
  };

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
        onClick={handleRoll}
        disabled={disabled || isRolling}
        className="roll-button"
      >
        {isRolling ? 'Rolling...' : 'Roll D20'}
      </button>
    </div>
  );
}
