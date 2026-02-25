import { Tab } from './types/Tab';

export function getSelectedTab(tabs: Tab[], selectedTabId: string): Tab | null {
  return tabs.find(tab => tab.id === selectedTabId) ?? null;
}
