import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useParams } from 'react-router-dom';
import { TabItem } from '../types/Tab';

const tabs: TabItem[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={activeIndex === -1 ? undefined : activeIndex}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {activeIndex === -1 ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          tabs.map(tab => <TabPanel key={tab.id}>{tab.content}</TabPanel>)
        )}
      </Tabs>
    </div>
  );
};
