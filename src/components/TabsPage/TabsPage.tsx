import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { TabData } from '../TabData/TabData';

export const TabsPage = memo(() => {
  const { tabId = '' } = useParams();
  const currentTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabData
              tab={tab}
              tabId={tabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </>
  );
});
