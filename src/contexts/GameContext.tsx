import { createContext, useContext, useState, ReactNode } from 'react';
import { GameState, GameMode, Category } from '../types/game.types';
import { DEFAULT_MASH_CATEGORIES } from '../constants/defaultCategories';

interface GameContextValue {
  gameState: GameState;
  setMode: (mode: GameMode) => void;
  setCategories: (categories: Category[]) => void;
  updateCategory: (categoryId: string, updates: Partial<Category>) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  removeCategory: (categoryId: string) => void;
  setDiceValue: (value: number) => void;
  setIsEliminating: (value: boolean) => void;
  setIsComplete: (value: boolean) => void;
  resetGame: () => void;
  phase: 'mode-selection' | 'category-editor' | 'gameplay' | 'results';
  setPhase: (phase: 'mode-selection' | 'category-editor' | 'gameplay' | 'results') => void;
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

const initialGameState: GameState = {
  mode: null,
  categories: [],
  diceValue: null,
  isEliminating: false,
  currentOptionIndex: 0,
  isComplete: false,
};

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [phase, setPhase] = useState<'mode-selection' | 'category-editor' | 'gameplay' | 'results'>('mode-selection');

  const setMode = (mode: GameMode) => {
    setGameState(prev => ({ ...prev, mode }));

    // Initialize categories based on mode
    let initialCategories: Category[] = [];
    if (mode === 'default-only' || mode === 'default-custom') {
      initialCategories = DEFAULT_MASH_CATEGORIES.map((cat, idx) => ({
        ...cat,
        id: `cat-${idx}`,
      }));
    }

    setGameState(prev => ({ ...prev, categories: initialCategories }));
    setPhase('category-editor');
  };

  const setCategories = (categories: Category[]) => {
    setGameState(prev => ({ ...prev, categories }));
  };

  const updateCategory = (categoryId: string, updates: Partial<Category>) => {
    setGameState(prev => ({
      ...prev,
      categories: prev.categories.map(cat =>
        cat.id === categoryId ? { ...cat, ...updates } : cat
      ),
    }));
  };

  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory: Category = {
      ...category,
      id: `cat-${Date.now()}`,
    };
    setGameState(prev => ({
      ...prev,
      categories: [...prev.categories, newCategory],
    }));
  };

  const removeCategory = (categoryId: string) => {
    setGameState(prev => ({
      ...prev,
      categories: prev.categories.filter(cat => cat.id !== categoryId),
    }));
  };

  const setDiceValue = (value: number) => {
    setGameState(prev => ({ ...prev, diceValue: value }));
  };

  const setIsEliminating = (value: boolean) => {
    setGameState(prev => ({ ...prev, isEliminating: value }));
  };

  const setIsComplete = (value: boolean) => {
    setGameState(prev => ({ ...prev, isComplete: value }));
    if (value) {
      setPhase('results');
    }
  };

  const resetGame = () => {
    setGameState(initialGameState);
    setPhase('mode-selection');
  };

  const contextValue: GameContextValue = {
    gameState,
    setMode,
    setCategories,
    updateCategory,
    addCategory,
    removeCategory,
    setDiceValue,
    setIsEliminating,
    setIsComplete,
    resetGame,
    phase,
    setPhase,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}
