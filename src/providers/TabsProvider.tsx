import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';

interface TabsContextI {
  tabs: Tab[];
  activeTab?: Tab;
}

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsContext = createContext<TabsContextI>({ tabs });

export const TabsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(t => t.id === tabId);

  const value = {
    tabs,
    activeTab,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const useTabs = () => useContext(TabsContext);
