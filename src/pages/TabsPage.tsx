import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId = 0 } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;
  const hasSelectedTab = Boolean(selectedTab);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs tabs={tabs} selectedTab={selectedTab} />

        <div className="block" data-cy="TabContent">
          {hasSelectedTab
            ? (selectedTab?.content)
            : ('Please select a tab')}
        </div>
      </div>
    </div>
  );
};
