import React, { useMemo, useState } from 'react';
import { Tab } from '../types/Tab';

export const TabContext = React.createContext({
  currentTab: null,
  setCurrentTab: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const TabProvider: React.FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);
  const value = useMemo(
    () => ({
      currentTab,
      setCurrentTab,
    }),
    [currentTab],
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
