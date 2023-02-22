import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { TabContent } from '../components/TabContent';
import { TabNav } from '../components/TabNav';

export const TabsPage: FC = () => {
  const { tabId: selectedTabId = '0' } = useParams();

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabNav selectedTabId={selectedTabId} />

      <TabContent selectedTab={selectedTab} />
    </>
  );
};
