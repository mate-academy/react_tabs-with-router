import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { TabsItem } from '../TabsItem';

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();
  const selectedTabContext = tabs
    .find(tab => tab.id === tabId)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabsItem
                key={tab.id}
                tab={tab}
                tabId={tabId}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContext}
        </div>
      </div>
    </>
  );
};
