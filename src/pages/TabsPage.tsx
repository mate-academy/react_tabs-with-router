import { tabs } from '../types/tabs';
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container"></div>
      <div className="tabs is-boxed">
        <h1 className="title">Tabs page</h1>
        <Tabs selectedIndex={selectedIndex} onSelect={() => {}}>
          <TabList>
            {tabs.map(tab => (
              <Tab
                data-cy="Tab"
                key={tab.id}
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>

          {tabs.map(tab => (
            <TabPanel key={tab.id}>{tab.content}</TabPanel>
          ))}
        </Tabs>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
