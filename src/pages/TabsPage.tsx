import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList className="tabs is-boxed">
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel
            key={tab.id}
            data-cy={selectedIndex === index ? 'TabContent' : undefined}
          >
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>

      {selectedIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
