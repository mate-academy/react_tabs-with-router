import { useParams } from 'react-router-dom';
import { useGlobalState } from '../../store/GlobalProvider';

export const TabContent = () => {
  const { tabId } = useParams();
  const { tabs } = useGlobalState();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};
