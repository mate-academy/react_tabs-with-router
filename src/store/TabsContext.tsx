import React from 'react';
import { Tab } from '../types/Tab';

export const TabsContext = React.createContext({
  value: [] as Tab[],
});

type Props = {
  children: React.ReactNode;
};

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const value = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <TabsContext.Provider value={{ value }}>
      {children}
    </TabsContext.Provider>
  );
};
