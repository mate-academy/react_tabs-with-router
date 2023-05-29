import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { tabs } from '../api/tabs';
import { TabsList } from '../components/TabsList/TabsList';

export const TabsPage: FC = () => {
  const { tabId } = useParams();

  const selectedTab = tabs
    .find(tab => tab.id === tabId)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList />

      <div className="block" data-cy="TabContent">
        {selectedTab}
      </div>
    </>
  );
};
