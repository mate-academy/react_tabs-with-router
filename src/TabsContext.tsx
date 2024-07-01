import React, { useMemo, useState } from "react";
import { Tab } from "./types/Tab";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  tabs: Tab[],
  selTab: Tab | null,
  setTabs: (value: Tab[]) => void,
  setSelTab: (value: Tab | null) => void,
}

export const TabsContext = React.createContext<ContextType>({
  tabs: [],
  selTab: null,
  setTabs: () => {},
  setSelTab: () => {},
});

export const TabsProvider: React.FC<Props> = ({ children }) => {
  const [tabs, setTabs] = useState([
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ]);

  const [selTab, setSelTab] = useState<Tab | null>(null);

  const value = useMemo(
    () => ({
      tabs,
      selTab,
      setTabs,
      setSelTab
    }),
    [tabs, selTab]
  )

  return (
    <TabsContext.Provider value={value}>{ children }</TabsContext.Provider>
  )
}
