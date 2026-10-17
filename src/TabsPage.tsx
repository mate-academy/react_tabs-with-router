import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@mate-academy/react_tabs-js';









import { Link, useParams } from 'react-router-dom';

import { Tab as TabType } from './types/Tab';

const tabs: TabType[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.findIndex(tab => tab.id === tabId);

  if (selectedTab === -1) {
    return (
      <>
        <h1 className="title">Tabs page</h1>

        <p>Please select a tab</p>
      </>
    );
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selected={selectedTab}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(tab => (
            <TabPanel key={tab.id}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
