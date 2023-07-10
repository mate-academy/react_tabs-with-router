import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage';
import { TabsPage } from '../../pages/TabsPage/TabsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: '/home',
        element: <Navigate to="/" replace />,
      },

      {
        path: '/tabs',
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

export const LayoutRouter = () => (
  <RouterProvider router={router} />
);
