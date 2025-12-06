import './ResultsModal.css';

interface ResultsModalProps {
  isOpen: boolean;
  results: Record<string, string>;
  onClose: () => void;
}

export function ResultsModal({ isOpen, results, onClose }: ResultsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Your Future</h2>
        <div className="results-list">
          {Object.entries(results).map(([category, value]) => (
            <div key={category} className="result-item">
              <span className="result-category">{category}:</span>
              <span className="result-value">{value}</span>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="play-again-button">
          Play Again
        </button>
      </div>
    </div>
  );
}
