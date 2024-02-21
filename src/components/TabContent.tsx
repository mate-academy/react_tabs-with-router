import { useParams } from 'react-router-dom';
import tabsData from '../data/data';

export const TabContent = () => {
  const { tabId } = useParams();
  const selectedTab = tabsData.find(tab => tabId === tab.id);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
};
