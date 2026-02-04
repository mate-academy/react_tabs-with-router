import { useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

export const TabDetail = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const currentTab = tabs.find(tab => tab.id === tabId);

  if (!currentTab) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      {currentTab.content}
    </div>
  );
};
