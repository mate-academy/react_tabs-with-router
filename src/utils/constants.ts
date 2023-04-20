import { PATH } from '../types';

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.Tabs]: '/tabs',
  [PATH.Error]: '/*',
  [PATH.TAB_ID]: ':tabId',
};
