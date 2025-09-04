import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

const TabsItem: React.FC = () => {
  const { tabId } = useParams();
  const activeTab = tabId ? tabs.find(tab => tab.id === tabId) : null;

  return (
    <div className="block" data-cy="TabContent">
      {!activeTab && 'Please select a tab'}
      {activeTab && activeTab.content}
    </div>
  );
};

export default TabsItem;
