import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TabContext } from '../../contexts/TabContext';

export const TabContent: React.FC = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabContext);

  const selectedTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab
        ? selectedTab.content
        : 'Please select a tab'}
    </div>
  );
};
