import { PropsWithChildren, useContext } from "react";
import { useParams } from "react-router-dom";
import { createContext } from "react";
import { Tab } from "../types/Tab";

interface TabsContextl {
  tabs: Tab[];
  activeTab?: Tab;
}

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsContext = createContext<TabsContextl>({
  tabs: tabs,
  activeTab: undefined,
})

export const TabsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { tabId } = useParams<{tabId?: string}>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <TabsContext.Provider value={{tabs: tabs, activeTab}}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextl => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('usaTabs must be used with a TabsProvider')
  }

  return context;
};