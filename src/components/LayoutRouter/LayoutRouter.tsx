import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage';
import { TabsPage } from '../../pages/TabsPage/TabsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { NotFoundRedirect } from '../../pages/NotFoundPage/NotFoundRedirect';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
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

export const LayoutRouter = () => (
  <RouterProvider router={router} />
);
