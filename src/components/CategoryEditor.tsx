import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { Category } from '../types/game.types';
import { getRandomChoices, MASHIT_HOME_OPTIONS } from '../constants/randomChoicePools';
import './CategoryEditor.css';

export function CategoryEditor() {
  const navigate = useNavigate();
  const { gameState, setCategories, resetGame } = useGame();
  const [editableCategories, setEditableCategories] = useState<Category[]>(gameState.categories);
  const [errorModal, setErrorModal] = useState<string | null>(null);

  const isEditable = gameState.mode !== 'default-only';

  // Randomize choices for all categories except Home (only for default-only mode)
  const handleRandomizeChoices = () => {
    const updatedCategories = editableCategories.map((category) => {
      const guaranteedOptions = category.name === 'Home' ? MASHIT_HOME_OPTIONS : undefined;
      const randomChoices = getRandomChoices(category.name, guaranteedOptions);
      if (!randomChoices) {
        return category;
      }

      return {
        ...category,
        options: randomChoices.map((text, index) => ({
          id: `${category.name.toLowerCase().replace(/\s+/g, '-')}-rand-${index}`,
          text,
          eliminated: false,
        })),
      };
    });

    setEditableCategories(updatedCategories);
  };

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
      setErrorModal('Please add at least 2 categories');
      return;
    }

    for (const cat of editableCategories) {
      if (!cat.name.trim()) {
        setErrorModal('All categories must have a name');
        return;
      }
      if (cat.options.length < 2) {
        setErrorModal(`Category "${cat.name}" must have at least 2 options`);
        return;
      }
      for (const opt of cat.options) {
        if (!opt.text.trim()) {
          setErrorModal(`All options in category "${cat.name}" must have text`);
          return;
        }
      }
    }

    setCategories(editableCategories);
    navigate('/gameplay');
  };

  const handleGoHome = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className="category-editor fade-in">
      <h1 className="category-editor-title">
        {gameState.mode === 'default-only' ? 'Your Categories' : 'Setup Your Categories'}
      </h1>

      {gameState.mode === 'default-only' && (
        <button className="dice-icon-button" onClick={handleRandomizeChoices} title="Randomize choices">
          🎲
        </button>
      )}

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
        <button onClick={handleGoHome} className="home-button">
          Home
        </button>
        <button onClick={validateAndStartGame} className="start-game-button">
          Start Game
        </button>
      </div>

      {errorModal && (
        <div className="error-modal-overlay" onClick={() => setErrorModal(null)}>
          <div className="error-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="error-modal-title">Oops!</h3>
            <p className="error-modal-message">{errorModal}</p>
            <button className="error-modal-button" onClick={() => setErrorModal(null)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
