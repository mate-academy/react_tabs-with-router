import React, { createContext, useContext, PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsContextI {
  tabs: Tab[];
  activeTab?: Tab;
}

const TABS: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsContext = createContext<TabsContextI>({
  tabs: TABS,
  activeTab: undefined,
});

export const TabsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = TABS.find(tab => tab.id === tabId);

  return (
    <TabsContext.Provider value={{ tabs: TABS, activeTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextI => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return context;
};
