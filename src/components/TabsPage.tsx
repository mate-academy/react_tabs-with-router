import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { TabItem } from './TabItem';

export const TabsPage: FC = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}

      </div>
    </>
  );
};
