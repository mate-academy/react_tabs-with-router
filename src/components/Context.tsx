import React, { ReactNode, useContext } from 'react';
import { Tab } from '../types/Tab';

interface ValuesTypes {
  tabs: Tab[];
}

const TabsContext = React.createContext<ValuesTypes | undefined>(undefined);

if (!TabsContext) {
  throw new Error('useUser must be used within a UserProvider');
}

// eslint-disable-next-line max-len
export const TabsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const values: ValuesTypes = {
    tabs,
  };

  return (
    <TabsContext.Provider value={values}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = (): ValuesTypes => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
