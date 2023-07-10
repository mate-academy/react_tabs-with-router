import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { Tabs } from './components/Tabs/Tabs';
import { PageNotFound } from './pages/PageNotFound';
import {
  HomePageRedirect,
} from './components/HomePageRedirect/HomePageRedirect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [{
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/home',
      element: <HomePageRedirect />,
    },
    {
      path: '/tabs',
      element: <Tabs />,
      children: [{
        path: ':tabId',
        element: <Tabs />,
      }],
    },
    {
      path: '/not-found',
      element: <PageNotFound />,
    }],
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root'),
);
