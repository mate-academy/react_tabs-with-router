import React, { useEffect, useState } from 'react';
import tabsData from '../data/tabs.json';
import { Tab } from '../types/Tab';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  tabs: Tab[];
  setTabs: (v: Tab[]) => void;
};
export const TabContext = React.createContext<ContextType>({
  tabs: [],
  setTabs: () => [],
});

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    setTabs(tabsData);
  }, []);

  const tabsTools = {
    tabs,
    setTabs,
  };

  return (
    <TabContext.Provider value={tabsTools}>{children}</TabContext.Provider>
  );
};
