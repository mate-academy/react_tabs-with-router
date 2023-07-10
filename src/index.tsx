import {
  Navigate,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },

      {
        path: 'tabs',
        element: <TabsPage />,
        children: [
          {
            path: ':tabId',
          },
        ],
      },

      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
