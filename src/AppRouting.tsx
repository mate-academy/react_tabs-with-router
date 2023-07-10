import { RouterProvider, createHashRouter } from 'react-router-dom';
import { FC } from 'react';
import { App } from './App';
import { Home } from './Components/Home';
import { Tabs } from './Components/Tabs';
import { NotFoundPage } from './Components/NotFoundPage';
import { NotFoundRedirect } from './Components/NotFoundRedirect';
import { HomePageRedirect } from './Components/HomePageRedirect';

const router = createHashRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFoundRedirect />,
  children: [{
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <HomePageRedirect />,
  },
  {
    path: '/tabs',
    element: <Tabs />,
  },
  {
    path: '/tabs/:tabId',
    element: <Tabs />,
  },
  {
    path: '/page-not-found',
    element: <NotFoundPage />,
  },
  ],
}]);

export const AppRouting: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};
