import { createBrowserRouter } from 'react-router-dom';
import { GameModeSelector } from './components/GameModeSelector';
import { CategoryEditorRoute } from './components/CategoryEditorRoute';
import { GameplayRoute } from './components/GameplayRoute';
import { ResultsRoute } from './components/ResultsRoute';
import { RootLayout } from './components/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <GameModeSelector />,
      },
      {
        path: 'default',
        element: <CategoryEditorRoute mode="default-only" />,
      },
      {
        path: 'custom',
        element: <CategoryEditorRoute mode="custom-only" />,
      },
      {
        path: 'def_cust',
        element: <CategoryEditorRoute mode="default-custom" />,
      },
      {
        path: 'gameplay',
        element: <GameplayRoute />,
      },
      {
        path: 'results',
        element: <ResultsRoute />,
      },
    ],
  },
]);
