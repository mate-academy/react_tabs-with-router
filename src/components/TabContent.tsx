import { useParams } from 'react-router-dom';
import { tabs } from '../consts';

export const TabContent = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';
  const getContent = (TabId: string) => {
    const selectedTab = tabs.find(tab => tab.id === TabId);

    if (selectedTab) {
      return selectedTab.content;
    }

    return 'Please select a tab';
  };

  return (
    <div className="block" data-cy="TabContent">
      {getContent(selectedTabId)}
    </div>
  );
};
