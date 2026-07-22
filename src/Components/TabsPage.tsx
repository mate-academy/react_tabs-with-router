import { Link, useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  const handleSelect = (index: number) => {
    const nextTab = tabs[index];

    if (nextTab) {
      navigate(`/tabs/${nextTab.id}`);
    }
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={selectedIndex} onSelect={handleSelect} className="">
        <div className="tabs is-boxed">
          <TabList className="">
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className=""
                selectedClassName="is-active"
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        {tabs.map(tab => (
          <TabPanel key={tab.id} className="">
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
    </>
  );
};
