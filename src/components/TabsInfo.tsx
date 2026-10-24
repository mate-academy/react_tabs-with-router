import { useParams } from 'react-router-dom';
import { tabs } from '../types/Tabs';

export const TabsInfo = () => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
