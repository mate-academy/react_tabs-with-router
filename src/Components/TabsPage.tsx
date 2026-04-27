import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams, useNavigate, Link } from 'react-router-dom';

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams();
  const navigate = useNavigate();
  const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);
  const noTabSelected = tabId === undefined || activeTabIndex === -1;
  const selectedIndex = noTabSelected ? -1 : activeTabIndex;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
        selectedTabClassName="react-tabs__tab--selected is-active"
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>
        {tabs.map((tab, index) => (
          <TabPanel key={tab.id} forceRender>
            {(noTabSelected ? index === 0 : index === activeTabIndex) && (
              <div data-cy="TabContent">
                {noTabSelected ? 'Please select a tab' : tab.content}
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
