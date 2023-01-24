import { useParams } from 'react-router-dom';
import { tabsFromServer } from '../api/api';
import { Tabs } from '../components/Tabs';

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabsFromServer} selectedTab={tabId} />
    </>
  );
};
