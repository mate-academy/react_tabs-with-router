import React, { useContext, useState } from 'react';
import { Tab } from '../types/Tab';
import tabsFromServer from '../api/tabs.json';

const initialTabs: Tab[] = tabsFromServer.map(tab => ({ ...tab }));

export const TabsContext = React.createContext(initialTabs);

type Props = {
  children: React.ReactNode;
};

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const [tabs] = useState<Tab[]>(initialTabs);

  return <TabsContext.Provider value={tabs}>{children}</TabsContext.Provider>;
};

export function useTabs() {
  const tabs = useContext(TabsContext);

  return tabs;
}
