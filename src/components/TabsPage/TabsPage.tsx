import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  useEffect(() => {
    setActiveTabId(tabId || '');
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} activeTabId={activeTabId} />

      {!tabs.find(tab => tab.id === activeTabId) && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
