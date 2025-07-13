import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
      <div className="block" data-cy="TabContent">
        {tabId && activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
