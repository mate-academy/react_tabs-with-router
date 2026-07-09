import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={activeTabIndex === -1 ? -1 : activeTabIndex}
        onSelect={() => {}}
        selectedTabClassName="is-active"
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab">
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

      {activeTabIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
