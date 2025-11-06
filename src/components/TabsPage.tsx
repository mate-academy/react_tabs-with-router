import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { tabs } from '../App';

export const TabsPage = () => {
  const { tabId } = useParams();

  return <Tabs tabs={tabs} activeTabId={tabId} />;
};
