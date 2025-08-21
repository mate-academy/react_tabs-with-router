import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TabsList } from '../components/TabsList';
import { tabs } from '../types/Tab';

export function TabsPage() {
  const { tabId } = useParams();
  const activeTab = useMemo(() => tabs.find(t => t.id === tabId), [tabId]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <TabsList activeId={activeTab?.id} />

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
}
