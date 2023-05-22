import { Tab } from '../types/Tab';

export const findTabById = (allTabs: Tab[], tabId: string) => {
  const findedTab = allTabs.find(tab => tab.id === tabId);

  return findedTab ? findedTab.content : 'Please select a tab';
};
