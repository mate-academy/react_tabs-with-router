import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { tabs } from '../../api';
import { TabItem } from '../TabItem';

export const TabsPage: FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs
    .find(tab => tab.id === tabId)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabItem key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab}
      </div>
    </>
  );
};
