import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from '../../App';
import { Home } from '../../pages/Home';
import { Tabs } from '../../pages/Tabs';
import { NotFound } from '../../pages/NotFound';
import { NotFoundRedirect } from '../../pages/NotFound/NotFoundRedirect';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },

      {
        path: 'tabs',
        element: <Tabs />,
        children: [
          {
            path: ':tabId',
          },
        ],
      },

      {
        path: 'not-found',
        element: <NotFound />,
      },
    ],
  },
]);

export const LayoutRouter = () => <RouterProvider router={router} />;
