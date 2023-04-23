import { Tab } from './types/Tab';

export function getTabById(tabs: Tab[], tabId: string): Tab | undefined {
  return tabs.find(tab => tab.id === tabId);
}
