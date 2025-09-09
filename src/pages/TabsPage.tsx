import { TabsList } from '../components/TabsList';
import { tabs } from '../api/tabs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  useEffect(() => {
    setActiveTabId(tabId || '');
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} activeTabId={activeTabId} />
      {!tabs.find(tab => tab.id === activeTabId) && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
