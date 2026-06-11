import { useParams } from 'react-router-dom';
import { Tabs, Tab } from '../components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const foundTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="content">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTabId={tabId || ''} />

      {foundTab ? (
        <div className="block" data-cy="TabContent">
          {foundTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
