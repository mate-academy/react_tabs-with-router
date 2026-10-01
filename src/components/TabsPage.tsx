import { useParams } from 'react-router-dom';
import { tabs } from '../App';

import { Tab } from './Tab';

export const TabsPage = () => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                tab={tab}
                isActive={tab.id === activeTab?.id}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
