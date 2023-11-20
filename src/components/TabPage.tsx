import { useParams } from 'react-router-dom';

import { tabs } from '../App';

export const Tab = () => {
  const { tabId } = useParams();
  const tab = tabs.find(tabEl => tabEl.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tab
        ? tab.content
        : 'Please select a tab'}
    </div>
  );
};
