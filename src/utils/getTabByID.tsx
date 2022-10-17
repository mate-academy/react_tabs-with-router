import { Tab } from '../types/Tab';

export const getTabByID = (tabs: Tab[], tabId: string) => {
  return tabs.find(tab => tab.id === tabId) || null;
};
