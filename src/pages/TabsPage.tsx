import { useNavigate, useParams } from 'react-router-dom';
import { tabs } from '../types/Tab';
import { Tabs } from '../components/Tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const handleTabSelect = (selectedTabId: string) => {
    navigate(`/tabs/${selectedTabId}`);
  };

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTabId={tabId} onTabSelect={handleTabSelect} />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
