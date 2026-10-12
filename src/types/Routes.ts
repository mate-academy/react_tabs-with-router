import { ReactNode } from 'react';

export interface AppRoutes {
  HOME: string;
  HOME_REDIRECT: string;
  TABS: string;
  TABS_WITH_ID: string;
  NOT_FOUND: string;
}

export interface RouteChildConfig {
  index?: boolean;
  path?: string;
  element: ReactNode;
}

export interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteChildConfig[];
}
