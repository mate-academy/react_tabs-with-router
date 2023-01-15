import {
  createContext,
  ReactNode,
  useState,
  FC,
} from 'react';
import type { Tab } from '../types/Tab';

interface TabsContextType {
  tabs: Tab[];
}

interface TabsProviderProps {
  children: ReactNode;
}

export const TabsContext = createContext<TabsContextType | null>(null);

export const TabsProvider: FC<TabsProviderProps> = ({ children }) => {
  const [tabs] = useState<Tab[]>([
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ]);

  return (
    <TabsContext.Provider value={{ tabs }}>{children}</TabsContext.Provider>
  );
};
