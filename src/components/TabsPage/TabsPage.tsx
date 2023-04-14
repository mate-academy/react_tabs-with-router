import { useParams } from 'react-router-dom';
import { TabsNavigation } from '../TabsNavigation/TabsNavigation';
import { tabs } from '../../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsNavigation tabs={tabs} activeTabId={tabId} />
    </>
  );
};
