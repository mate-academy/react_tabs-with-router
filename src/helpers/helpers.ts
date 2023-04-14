import { Tab } from '../types/Tab';

export function findId(tabs: Tab[], selectedTabId?: string): Tab | undefined {
  return tabs.find(({ id }) => id === selectedTabId);
}
