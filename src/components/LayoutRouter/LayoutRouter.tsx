import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage';
import { TabsPage } from '../../pages/TabsPage/TabsPage';
import { TabsTable } from '../TabsTable';
import { NotFoundRedirect } from '../../pages/NotFoundPage/NotFoundRedirect';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/" replace />,
      },

      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/tabs',
        element: <TabsPage tabs={tabs} />,
        children: [
          {
            path: '/tabs/:tabId',
            element: <TabsTable tabs={tabs} selectedTabId="" />,
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
