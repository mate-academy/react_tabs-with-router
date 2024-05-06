import React, { useMemo, useState } from 'react';
import { Tab } from '../types/Tab';

/* eslint-disable @typescript-eslint/no-unused-vars */
type TabsContextType = {
  currentTab: Tab;
  setCurrentTab: (currentTab: Tab) => void;
};

export const TabsContext = React.createContext<TabsContextType>({
  currentTab: { id: '', title: '', content: '' },
  setCurrentTab: (_currentId: Tab) => {},
});

type Props = {
  children: React.ReactNode;
};

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState({
    id: '',
    title: '',
    content: '',
  });

  const value = useMemo(
    () => ({
      currentTab,
      setCurrentTab,
    }),
    [currentTab],
  );

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
