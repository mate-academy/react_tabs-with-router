import {
  Navigate,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root'),
);
