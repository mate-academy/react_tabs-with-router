import { useParams } from 'react-router-dom';
import { TabInfo } from '../Components/TabInfo';
import { tabs } from '../data/tabs';

export const TabsPage: React.FC = () => {
  const { tabId = 'tab-0' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              tab={tab}
              key={tab.id}
              selectedTabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
