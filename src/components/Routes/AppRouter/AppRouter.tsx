import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { HomePage } from '../../../pages/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { NotFoundRedirect } from '../../../pages/NotFoundPage/NotFoundRedirect';
import { TabsPage } from '../../../pages/TabsPage/TabsPage';
import { LayoutRouter } from '../LayoutRouter';

const router = createHashRouter([
  {
    path: '/',
    element: <LayoutRouter />,
    errorElement: <NotFoundRedirect />,
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
        path: 'not-found',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const AppRouter = () => (
  <RouterProvider router={router} />
);
