import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { HomePage } from './Components/HomePage/HomePage';
import { Tabs } from './Components/Tabs/Tabs';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tabs',
        children: [
          {
            index: true,
            element: <Tabs />,
          },
          {
            path: ':tabId',
            element: <Tabs />,
          },
        ],
      },
    ],
  },
  {
    path: 'home',
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
