import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId = '' } = useParams();

  const activeTab = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs selectedIndex={activeTab}>
          <TabList>
            {tabs.map(tab => {
              return (
                <Tab data-cy="Tab" key={tab.id}>
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </Tab>
              );
            })}
          </TabList>

          {tabs.map(tab => {
            return <TabPanel key={tab.id}>{tab.content}</TabPanel>;
          })}
          {activeTab < 0 && (
            <div className="block" data-cy="TabContent">
              {'Please select a tab'}
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
};
