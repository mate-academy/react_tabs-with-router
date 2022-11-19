import { useParams } from 'react-router-dom';
import { TabsList } from '../TabsList';

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs Page</h1>

      <TabsList selectedTabId={tabId} />
    </>
  );
};
