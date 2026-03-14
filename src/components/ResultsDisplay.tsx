import './ResultsDisplay.css';

interface ResultsDisplayProps {
  results: Record<string, string>;
  onPlayAgain: () => void;
}

export function ResultsDisplay({ results, onPlayAgain }: ResultsDisplayProps) {
  return (
    <div className="results-display fade-in">
      <h1 className="results-title">Your Future</h1>
      <div className="results-list">
        {Object.entries(results).map(([category, value]) => (
          <div key={category} className="result-item">
            <span className="result-category">{category}:</span>
            <span className="result-value">{value}</span>
          </div>
        ))}
      </div>
      <button onClick={onPlayAgain} className="play-again-button">
        Play Again
      </button>
    </div>
  );
}
