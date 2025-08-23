import { useParams } from 'react-router-dom';
import { useTabs } from '../TabsContext/TabsContext';

export const TabContent = () => {
  const { tabId } = useParams();
  const tabs = useTabs();
  const activeTab = tabs.find(tab => tab.id === tabId);
  const activeTabContent = activeTab
    ? activeTab.content
    : 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {activeTabContent}
    </div>
  );
};
