import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { ErrorPage } from './pages/ErrorPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tabs',
        children: [
          {
            path: ':tabId?',
            element: <TabsPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement)
  .render(<RouterProvider router={router} />);
