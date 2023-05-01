import { Tab } from './types/Tab';

export const getTabById = (tabs: Tab[], tabId: string) => (
  tabs.find((tab: Tab) => tab.id === tabId) || tabs[0]
);
