import React, { useState } from 'react';
import { Tab } from '../../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface ContextTabs {
  tabs: Tab[];
  activeTab: Tab | null;
  setActiveTab: (activeTab: Tab) => void;
}
export const TabsContext = React.createContext<ContextTabs>({
  tabs,
  activeTab: tabs[0],
  setActiveTab: () => {},
});

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  return (
    <TabsContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};
