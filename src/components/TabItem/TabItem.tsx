import { useParams } from 'react-router-dom';
import { Tabs } from '../../store/Tabs';

export const TabItem = () => {
  const { tabId } = useParams();
  const Tab = Tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {Tab
        ? Tab.content
        : 'Please select a tab'}
    </div>
  );
};
