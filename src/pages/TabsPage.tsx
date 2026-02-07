import { tabs } from '../services/Tabs';
import { TabItem } from '../components/TabItem';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem key={tab.id} tab={tab} tabId={tabId} />
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
