import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFound';
import { NotFoundRedirect } from './components/NotFoundRedirect';
import { Home } from './components/Home';
import { Navigate } from './components/Navigate';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Navigate />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tabs',
        element: <Tabs />,
        children: [
          {
            path: '/tabs/:tabId',
            element: <div className="block" data-cy="TabContent" />,
          },
        ],
      },
      {
        path: '/example',
        element: <div>Example Component</div>,
      },
    ],
  },
  {
    path: 'not-found',
    element: <NotFound />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root'),
);
