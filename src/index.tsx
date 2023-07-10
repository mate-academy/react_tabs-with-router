import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './routes/HomePage';
import { TabsPage } from './routes/TabsPage';
import React from 'react';
import { NotFoundPage } from './routes/NotFoundPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, element: <HomePage />
      },
      {
        path: 'tabs',
        element: <TabsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
