import { useParams } from 'react-router-dom';
import { tabs } from './store/Tabs';

export const Tab = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    selectedTab && (
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    )
  );
};
