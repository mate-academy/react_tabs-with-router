import { useParams } from 'react-router-dom';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabId = tabId && tabs.some(tab => tab.id === tabId) ? tabId : '';
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={activeTabId} />

      {activeTabId ? (
        <div className="block" data-cy="TabContent">
          {activeTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
