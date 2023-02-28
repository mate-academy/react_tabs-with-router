import { Tab } from '../types/Tab';

export const getCurrentTabContent = (tabs: Tab [], tabId: string): string => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return currentTab?.content || 'Please select a tab';
};
