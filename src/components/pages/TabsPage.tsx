// .. TabsPage.tsx
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <Tabs selectedIndex={selectedIndex >= 0 ? selectedIndex : -1}>
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id}>
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>

          {tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}
        </Tabs>

        {selectedIndex === -1 && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </section>
  );
};
