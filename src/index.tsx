import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import React from 'react';
import { App } from './App';
import { HomePage } from './routes/HomePage';
import { TabsPage } from './routes/TabsPage';
import { NotFoundPage } from './routes/NotFoundPage';

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
        path: 'tabs',
        element: <TabsPage />,
        children: [
          {
            path: ':tabId',
          },
        ],
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
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
