import { Tab } from '../constants/types';


export const getActiveTab = (tabs: Tab[], id: string): Tab => {
  const activeTab = tabs.find(tab => tab.id === id) as Tab;

  return activeTab;
};

export const checkTabIdValid = (tabs: Tab[], id: string | undefined): boolean => {
  return tabs.some(tab => tab.id === id);
};
