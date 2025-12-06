import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Category } from '../types/game.types';
import './CategoryEditor.css';

export function CategoryEditor() {
  const { gameState, setPhase, setCategories } = useGame();
  const [editableCategories, setEditableCategories] = useState<Category[]>(gameState.categories);

  const isEditable = gameState.mode !== 'default-only';

  const handleCategoryNameChange = (categoryId: string, newName: string) => {
    setEditableCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId ? { ...cat, name: newName } : cat
      )
    );
  };

  const handleOptionTextChange = (categoryId: string, optionId: string, newText: string) => {
    setEditableCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              options: cat.options.map(opt =>
                opt.id === optionId ? { ...opt, text: newText } : opt
              ),
            }
          : cat
      )
    );
  };

  const handleAddOption = (categoryId: string) => {
    setEditableCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              options: [
                ...cat.options,
                {
                  id: `opt-${Date.now()}`,
                  text: '',
                  eliminated: false,
                },
              ],
            }
          : cat
      )
    );
  };

  const handleRemoveOption = (categoryId: string, optionId: string) => {
    setEditableCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              options: cat.options.filter(opt => opt.id !== optionId),
            }
          : cat
      )
    );
  };

  const handleAddCategory = () => {
    const newCategory: Category = {
      id: `cat-${Date.now()}`,
      name: '',
      options: [
        { id: `opt-${Date.now()}-1`, text: '', eliminated: false },
        { id: `opt-${Date.now()}-2`, text: '', eliminated: false },
      ],
    };
    setEditableCategories(prev => [...prev, newCategory]);
  };

  const handleRemoveCategory = (categoryId: string) => {
    setEditableCategories(prev => prev.filter(cat => cat.id !== categoryId));
  };

  const validateAndStartGame = () => {
    // Validation
    if (editableCategories.length < 2) {
      alert('Please add at least 2 categories');
      return;
    }

    for (const cat of editableCategories) {
      if (!cat.name.trim()) {
        alert('All categories must have a name');
        return;
      }
      if (cat.options.length < 2) {
        alert(`Category "${cat.name}" must have at least 2 options`);
        return;
      }
      for (const opt of cat.options) {
        if (!opt.text.trim()) {
          alert(`All options in category "${cat.name}" must have text`);
          return;
        }
      }
    }

    setCategories(editableCategories);
    setPhase('gameplay');
  };

  return (
    <div className="category-editor fade-in">
      <h1 className="category-editor-title">
        {gameState.mode === 'default-only' ? 'Your Categories' : 'Setup Your Categories'}
      </h1>

      <div className="categories-container">
        {editableCategories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-header">
              {isEditable ? (
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) => handleCategoryNameChange(category.id, e.target.value)}
                  placeholder="Category name..."
                  className="category-name-input"
                />
              ) : (
                <h3 className="category-name">{category.name}</h3>
              )}
              {isEditable && editableCategories.length > 2 && (
                <button
                  onClick={() => handleRemoveCategory(category.id)}
                  className="remove-button"
                  title="Remove category"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="options-list">
              {category.options.map(option => (
                <div key={option.id} className="option-row">
                  {isEditable ? (
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) => handleOptionTextChange(category.id, option.id, e.target.value)}
                      placeholder="Option..."
                      className="option-input"
                    />
                  ) : (
                    <span className="option-text">{option.text}</span>
                  )}
                  {isEditable && category.options.length > 2 && (
                    <button
                      onClick={() => handleRemoveOption(category.id, option.id)}
                      className="remove-option-button"
                      title="Remove option"
                    >
                      −
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditable && (
              <button
                onClick={() => handleAddOption(category.id)}
                className="add-option-button"
              >
                + Add Option
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="editor-actions">
        {isEditable && (
          <button onClick={handleAddCategory} className="add-category-button">
            + Add Category
          </button>
        )}
        <button onClick={validateAndStartGame} className="start-game-button">
          Start Game
        </button>
      </div>
    </div>
  );
}
