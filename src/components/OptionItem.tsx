import { Option } from '../types/game.types';
import './OptionItem.css';

interface OptionItemProps {
  option: Option;
  isHighlighted: boolean;
}

export function OptionItem({ option, isHighlighted }: OptionItemProps) {
  const classNames = [
    'option-item',
    option.eliminated && 'option-eliminated',
    isHighlighted && 'option-highlighted',
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {option.text}
    </div>
  );
}
