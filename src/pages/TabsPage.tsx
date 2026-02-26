import { useParams } from 'react-router-dom';
import { TabsForm } from '../components/TabsForm';
import { tabs } from '../api/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabsForm tabs={tabs} activeTab={activeTab} />
    </div>
  );
};
