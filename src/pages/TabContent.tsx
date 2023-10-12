import { useParams } from 'react-router-dom';
import { useTabs } from '../store/TabsContext';
import { Tab } from '../types/Tab';

export const TabContent = () => {
  const tabs = useTabs();
  const { tabId } = useParams();
  const currentTab = tabs.find((tab: Tab) => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? (
        currentTab.content
      ) : (
        'Please select a tab'
      )}
    </div>
  );
};
