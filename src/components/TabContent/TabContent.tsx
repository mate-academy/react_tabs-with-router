import { useMatch } from 'react-router-dom';
import { tabs } from '../../utils/tabs';

export const TabContent = () => {
  const match = useMatch('/tabs/:tabId');

  const selectedTab = tabs.find(tab => tab.id === match?.params.tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? `${selectedTab?.content}` : 'Please select a tab'}
    </div>
  );
};
