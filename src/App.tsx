import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, createHashRouter } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { Layout } from './Components/Layout';

export const App = createHashRouter([
  {
    path: '/',
    element: <Layout />,
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
            element: <TabsPage />,
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
