export type GameMode = 'custom-only' | 'default-custom' | 'default-only';

export interface Option {
  id: string;
  text: string;
  eliminated: boolean;
  isActive?: boolean; // For animation highlighting
}

export interface Category {
  id: string;
  name: string;
  options: Option[];
}

export interface GameState {
  mode: GameMode | null;
  categories: Category[];
  diceValue: number | null;
  isEliminating: boolean;
  currentOptionIndex: number;
  isComplete: boolean;
}

export interface EliminationStep {
  categoryIndex: number;
  optionIndex: number;
  shouldEliminate: boolean;
}
