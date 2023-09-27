import { createContext, ReactNode } from 'react';
import { Tab } from './types/Tab';

export const TabContext = createContext<Tab[]>([]);

interface Props {
  children: ReactNode
}
export const TabsProvider: React.FC<Props> = ({ children }) => {
  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <TabContext.Provider value={tabs}>
      {children}
    </TabContext.Provider>
  );
};
