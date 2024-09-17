import React from 'react';
import { Tab } from './types/Tab';
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type TabsContextType = {
  tabs: Tab[];
};

const initialState: TabsContextType = {
  tabs: tabs,
};

export const TabsContext = React.createContext(initialState);

type Props = {
  children: React.ReactNode;
};

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const value = {
    tabs,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
