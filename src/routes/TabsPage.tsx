import { useMemo } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { TabsList } from '../components/TabsList';
import { Tab } from '../types/Tab';

export const TabsPage = () => {
  const tabs: Tab[] = useOutletContext();
  const { tabId: selectedTabId = '' } = useParams();

  const selectedTab = useMemo(() => {
    return tabs.find(({ id }) => id === selectedTabId);
  }, [selectedTabId, tabs]);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} selectedTabId={selectedTabId} />

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
