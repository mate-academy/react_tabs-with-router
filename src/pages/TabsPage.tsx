import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs/Tabs';
import { tabsFromServer } from '../tabsFromServer';

export const TabsPage = () => {
  const { tabsId = '0' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabsFromServer}
        selectedTabId={tabsId}
      />
    </>
  );
};
