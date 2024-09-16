import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  children: React.ReactNode;
};

type TabsAppContextType = {
  tabs: Tab[];
};

export const TabsAppContext = React.createContext<TabsAppContextType>({
  tabs: [],
});

const tabsArray = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsAppProvider: React.FC<Props> = ({ children }) => {
  const tabs = tabsArray;

  const contextValue = {
    tabs,
  };

  return (
    <TabsAppContext.Provider value={contextValue}>
      {children}
    </TabsAppContext.Provider>
  );
};
