import React, { useContext } from 'react';
import { Tab } from '../types/Tab';

type TabContextType = {
  tabs: Tab[];
};

export const TabContext = React.createContext<TabContextType | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export const TabProvider: React.FC<Props> = ({ children }) => {
  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const value = { tabs };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }

  return context;
};
