import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { TabLink } from '../components/Tab';

export const TabsPage: FC = memo(() => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              key={tab.id}
              tab={tab}
              activeTabId={selectedTab?.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
});
