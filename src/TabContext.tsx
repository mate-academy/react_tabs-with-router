import { createContext, useState, ReactNode } from 'react';
import { Tab } from './types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface TabContextType {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
  tabs: Tab[];
}

export const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, tabs }}>
      {children}
    </TabContext.Provider>
  );
};
