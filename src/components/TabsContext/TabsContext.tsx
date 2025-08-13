import { createContext, useContext, ReactNode } from 'react';
import { Tab } from '../../types/Tab';

const tabsList: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsContext = createContext<Tab[]>([]);

export const TabsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TabsContext.Provider value={tabsList}>{children}</TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
