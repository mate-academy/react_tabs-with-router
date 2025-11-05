import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const tabs = [
  { id: 'one', title: 'Tab 1', content: 'Content of Tab 1' },
  { id: 'two', title: 'Tab 2', content: 'Content of Tab 2' },
  { id: 'three', title: 'Tab 3', content: 'Content of Tab 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1>Tabs page</h1>

      <Tabs selectedIndex={activeIndex >= 0 ? activeIndex : undefined}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {tabId === tab.id ? tab.content : 'Please select a tab'}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
