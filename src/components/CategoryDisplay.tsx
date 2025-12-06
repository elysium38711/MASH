import { Category } from '../types/game.types';
import { OptionItem } from './OptionItem';
import './CategoryDisplay.css';

interface CategoryDisplayProps {
  category: Category;
  currentHighlight?: { categoryIndex: number; optionIndex: number };
  categoryIndex: number;
}

export function CategoryDisplay({ category, currentHighlight, categoryIndex }: CategoryDisplayProps) {
  return (
    <div className="category-display">
      <h3 className="category-title">{category.name}</h3>
      <div className="options-container">
        {category.options.map((option, optionIndex) => (
          <OptionItem
            key={option.id}
            option={option}
            isHighlighted={
              currentHighlight?.categoryIndex === categoryIndex &&
              currentHighlight?.optionIndex === optionIndex
            }
          />
        ))}
      </div>
    </div>
  );
}
