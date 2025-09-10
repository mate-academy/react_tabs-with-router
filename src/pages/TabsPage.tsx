import { useParams } from 'react-router-dom';
import { TabsList } from '../components/TabsList';
import { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';

export const TabsPage = () => {
  const { tabId } = useParams();
  const { tabs } = useContext(TabsContext);

  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList activeTabIndex={activeIndex} />
    </>
  );
};
