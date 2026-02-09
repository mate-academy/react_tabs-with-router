import { useParams, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
        onSelect={() => {}}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.map(tab => (
            <TabPanel key={tab.id}>{tab.content}</TabPanel>
          ))}

          {selectedIndex === -1 && 'Please select a tab'}
        </div>
      </Tabs>
    </>
  );
};
