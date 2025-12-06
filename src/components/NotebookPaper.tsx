import { ReactNode } from 'react';
import '../styles/notebook.css';
import '../styles/animations.css';

interface NotebookPaperProps {
  children: ReactNode;
}

export function NotebookPaper({ children }: NotebookPaperProps) {
  return (
    <div className="notebook-paper">
      {children}
    </div>
  );
}
