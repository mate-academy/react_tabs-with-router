import { Tab } from './types/Tab';

export const getTabById = (tabs: Tab[], tabId = 'tab-1'): Tab | undefined => (
  tabs.find(tab => tab.id === tabId)
);
