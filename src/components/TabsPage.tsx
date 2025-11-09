import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getTabIndex = (tabId: string | undefined): number => {
  const index = tabs.findIndex(tab => tab.id === tabId);

  return index >= 0 ? index : 0;
};

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedIndex = getTabIndex(tabId);

  const handleTabSelect = (index: number) => {
    const newTabId = tabs[index].id;

    navigate(`/tabs/${newTabId}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id}>{tab.title}</Tab>
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
    </>
  );
};
