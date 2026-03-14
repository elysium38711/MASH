import { Outlet } from 'react-router-dom';
import { NotebookPaper } from './NotebookPaper';

export function RootLayout() {
  return (
    <NotebookPaper>
      <Outlet />
    </NotebookPaper>
  );
}
