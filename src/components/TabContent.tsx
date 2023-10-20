import { useParams } from 'react-router-dom';
import { tabs } from '../tabs/tabs';

export const TabContent = () => {
  const { tabId } = useParams();

  return (
    <div className="block" data-cy="TabContent">
      {tabs.find((tab) => tab.id === tabId)?.content || 'Please select a tab'}
    </div>
  );
};
