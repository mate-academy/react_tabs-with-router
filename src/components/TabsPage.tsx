import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedTabId={tabId as string} />
    </>
  );
};
