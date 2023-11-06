import React, { createContext, useContext, ReactNode } from 'react';
import { Tab } from '../types/Tab';

interface TabsContextProps {
  tabs: Tab[];
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

interface TabsProviderProps {
  children: ReactNode;
}

export const TabsProvider: React.FC<TabsProviderProps> = ({ children }) => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <TabsContext.Provider value={{ tabs }}>{children}</TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return context;
};
