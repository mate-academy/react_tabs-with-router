import { useEffect, useState } from 'react';
import { Tab } from './types/Tab';
import { TabComponent } from './TabComponent';
import { useParams } from 'react-router-dom';

interface TabsPageProps {
  tabs: Tab[];
} 

export const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  useEffect(() => {
    if (tabId) {
      const tab = tabs.find(t => t.id === tabId);
      setSelectedTab(tab || null);
    }
  }, [tabId, tabs]);
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabComponent
              key={tab.id}
              tab={tab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
