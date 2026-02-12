import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import cn from 'classnames';
import { Tab as TabType } from './types/Tab';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabs: TabType[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={() => {}}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === tabId })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedIndex === -1 ? (
            'Please select a tab'
          ) : (
            tabs.map(tab => (
              <TabPanel key={tab.id}>
                {tab.content}
              </TabPanel>
            ))
          )}
        </div>
      </Tabs>
    </>
  );
};
