import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabId={tabId} />
    </>
  );
};
