import { Tab } from '../../types/Tab';

export const getContentByTabId = (arr: Tab[], tabId: string) => {
  return arr.find(tab => tab.id === tabId)?.content;
};
