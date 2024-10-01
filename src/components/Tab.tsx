import { useParams } from 'react-router-dom';
import { tabs } from '../utils/tabsArray';

export const Tab = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab?.content}
    </div>
  );
};
