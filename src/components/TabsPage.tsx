import { useParams, Link, useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedIndex = tabId ? tabs.findIndex(tab => tab.id === tabId) : -1;

  if (selectedIndex === -1 && tabId !== undefined) {
    navigate(`/tabs/${tabs[0].id}`, { replace: true });
  }

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={selectedIndex >= 0 ? selectedIndex : 0} // захист від -1
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              className={selectedIndex === index ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel key={tab.id}>
            <div data-cy="TabContent">
              {selectedIndex === -1 ? 'Please select a tab' : tab.content}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
