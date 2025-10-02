import { useParams } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Tab } from '../../types/Tab';

// Wrapper component to handle URL parameters
export const TabsWithRoute = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams<{ tabId: string }>();

  // Find the tab from URL parameter, don't default if not found
  const getTab = (id: string): Tab | undefined => {
    return tabs.find(tab => tab.id === id);
  };

  const selectedTab = getTab(tabId || '');

  return <Tabs tabs={tabs} selectedTabId={selectedTab?.id} />;
};
