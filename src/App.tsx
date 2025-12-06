import { GameProvider, useGame } from './contexts/GameContext';
import { NotebookPaper } from './components/NotebookPaper';
import { GameModeSelector } from './components/GameModeSelector';
import { CategoryEditor } from './components/CategoryEditor';
import { GameBoard } from './components/GameBoard';

function AppContent() {
  const { phase } = useGame();

  return (
    <NotebookPaper>
      {phase === 'mode-selection' && <GameModeSelector />}
      {phase === 'category-editor' && <CategoryEditor />}
      {(phase === 'gameplay' || phase === 'results') && <GameBoard />}
    </NotebookPaper>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
