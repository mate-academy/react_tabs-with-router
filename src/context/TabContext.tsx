import React, { createContext, useContext } from 'react';
import { Tab } from '../types/Tab';

interface TabContextType {
  tabs: Tab[];
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const tabValues = {
    tabs,
  };

  return (
    <TabContext.Provider value={tabValues}>{children}</TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }

  return context;
};
