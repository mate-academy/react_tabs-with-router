import React, { useMemo, useState } from 'react';
import { Tab } from '../types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  setSelectedTab: (value: Tab) => void,
}

export const TabContex = React.createContext<Props>({
  tabs,
  setSelectedTab: () => {},
  selectedTab: tabs[0],
});

type Prop = {
  children:React.ReactNode
};

export const TabProvider: React.FC<Prop> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const value = useMemo(() => ({
    tabs,
    setSelectedTab,
    selectedTab,
  }), [selectedTab]);

  return (
    <TabContex.Provider value={value}>
      {children}
    </TabContex.Provider>
  );
};
