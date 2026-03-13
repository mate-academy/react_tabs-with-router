import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  return <Tabs activeTabId={tabId} />;
};
