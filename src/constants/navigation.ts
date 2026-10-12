import { Page } from '../types/Page';

export const NAVIGATION_PAGES: readonly Page[] = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'tabs', title: 'Tabs', path: '/tabs' },
] as const;
