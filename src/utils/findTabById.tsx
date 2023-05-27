import { Tab } from '../types/Tab';

export const findTabById = (allTabs: Tab[], tabId: string) => {
  const foundTab = allTabs.find(tab => tab.id === tabId);

  return foundTab ? foundTab.content : 'Please select a tab';
};
