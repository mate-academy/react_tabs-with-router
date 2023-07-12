import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { tabs } from '../constants';

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedTabId={tabId}
        tabs={tabs}
      />
    </>
  );
};
