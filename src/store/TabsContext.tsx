import { Tab } from '../types/Tab';
import { createContext, useState } from 'react';

export interface TabsContextType {
  tabs: Tab[];
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsContext = createContext<TabsContextType>({
  tabs: [],
  activeTab: { id: '', title: '', content: '' },
  setActiveTab: () => {},
});

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const value = {
    tabs,
    activeTab,
    setActiveTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
