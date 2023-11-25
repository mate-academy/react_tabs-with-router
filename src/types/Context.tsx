import { Tab } from './Tab';

export interface Context {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTabId: (v: string) => void;
  selectedTab: Tab | null;
}
