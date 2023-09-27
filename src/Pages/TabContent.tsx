import { useParams } from 'react-router-dom';

import { tabs } from '../api/tabs';
import { TabExeptionalMessages } from '../types/TabExeptionalMessages';

export const TabContent = () => {
  const { tabId } = useParams();
  const tab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tab
        ? tab.content
        : TabExeptionalMessages.SelectTab}
    </div>
  );
};
