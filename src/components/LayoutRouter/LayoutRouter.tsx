import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage';
import { TabsPage } from '../../pages/TabsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

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
        element: <TabsPage tabs={tabs} />,
        children: [
          {
            path: '/tabs/:tabId',
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
