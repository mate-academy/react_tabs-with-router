import { AppRoutes, RouteConfig } from '../types/Routes';
import { Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { Tabs } from '../components/Tabs';
import { NotFound } from '../components/NotFound';

export const APP_ROUTES = {
  HOME: '/',
  HOME_REDIRECT: '/home',
  TABS: '/tabs',
  TABS_WITH_ID: '/tabs/:tabId',
  NOT_FOUND: '*',
} as const satisfies AppRoutes;

export const routesConfig: RouteConfig[] = [
  {
    path: APP_ROUTES.HOME,
    element: <Home />,
  },
  {
    path: APP_ROUTES.HOME_REDIRECT,
    element: <Navigate to={APP_ROUTES.HOME} replace />,
  },
  {
    path: APP_ROUTES.TABS,
    element: <Tabs />,
    children: [
      { index: true, element: <Tabs /> },
      { path: ':tabId', element: <Tabs /> },
    ],
  },
  {
    path: APP_ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
