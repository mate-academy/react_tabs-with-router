import { useParams } from 'react-router-dom';
import { tabs } from './TabsPage';

export const TabContent = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};
