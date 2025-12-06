# MASH - Your Future Awaits

A modern, browser-based implementation of the classic MASH fortune-telling game with a retro notebook aesthetic.

## Features

### Three Game Modes

1. **Custom Only** - Create all categories and options from scratch
2. **Default + Custom** - Start with 8 classic MASH categories and customize them
3. **Default Only** - Play with the traditional MASH categories

### Default Categories

- **Home**: Mansion, Apartment, Shack, House
- **Spouse**: Celebrity Crush, Best Friend, Neighbor, Coworker
- **Car**: Ferrari, Honda Civic, Bicycle, Tesla
- **Number of Kids**: 0, 2, 5, 10
- **Pet**: Dog, Cat, Hamster, Iguana
- **Career**: Doctor, Teacher, Artist, Engineer
- **Salary**: $1,000,000/year, $75,000/year, $30,000/year, $500,000/year
- **Location**: New York City, Paris, Small Town, Beach Resort

### How to Play

1. **Choose a Mode** - Select Custom Only, Default + Custom, or Default Only
2. **Setup Categories** - Add, edit, or review your categories and options
3. **Roll the Die** - Click to roll a 20-sided die for your elimination interval
4. **Watch the Magic** - The game counts through all options, eliminating one each round
5. **See Your Future** - When only one option remains per category, your fortune is revealed!

## Gameplay Mechanics

- The elimination counter loops continuously through all non-eliminated options
- When a category has only one option left, it's skipped for elimination but still counted through
- Visual highlighting shows the current counting position (150ms per step)
- Eliminated options remain visible with a strike-through effect
- The game ends when all categories have exactly one remaining option

## Technology Stack

- **React 18** - Component-based UI
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool
- **CSS** - Custom retro notebook styling with handwritten fonts

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── GameModeSelector.tsx
│   ├── CategoryEditor.tsx
│   ├── GameBoard.tsx
│   ├── CategoryDisplay.tsx
│   ├── OptionItem.tsx
│   ├── DiceRoller.tsx
│   ├── ResultsModal.tsx
│   └── NotebookPaper.tsx
├── contexts/          # React Context for state management
│   └── GameContext.tsx
├── hooks/             # Custom React hooks
│   └── useElimination.ts
├── types/             # TypeScript type definitions
│   └── game.types.ts
├── constants/         # Game constants
│   └── defaultCategories.ts
├── utils/             # Utility functions
│   ├── eliminationEngine.ts
│   └── randomDice.ts
├── styles/            # CSS styling
│   ├── variables.css
│   ├── notebook.css
│   └── animations.css
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Key Features

### Visual Elimination Animation

The game features a smooth, watchable elimination process:
- 150ms per counting step
- Pulse highlight on the current option
- Strike-through animation when eliminated
- 300ms pause after each elimination

### Retro Aesthetic

- Notebook paper background with horizontal lines
- Red vertical margin line
- Handwritten-style fonts (Indie Flower, Permanent Marker)
- Aged paper color scheme
- Hand-drawn button styles

### Responsive Design

Works seamlessly on desktop and mobile devices with adaptive layouts.

## Credits

Built with React, TypeScript, and Vite.
Inspired by the classic MASH pen-and-paper game.
