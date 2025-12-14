import { useParams } from 'react-router-dom';
import { Tabs } from '../components/tabs/Tabs';
import { TabContent } from '../components/tabs/TabContent';
import { tabs, Tab } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab: Tab | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTabId={tabId} />

      <TabContent
        content={activeTab ? activeTab.content : 'Please select a tab'}
      />
    </>
  );
};
