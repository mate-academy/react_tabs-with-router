import React from 'react';
import { tabs } from '../App';
import { TabItem } from './TabItem';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <TabItem key={t.id} tab={t} />
          ))}
        </ul>
      </div>

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
