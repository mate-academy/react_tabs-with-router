import { useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabContentPage: React.FC = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
