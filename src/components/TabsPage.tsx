/* eslint-disable import/no-extraneous-dependencies */
import { useParams, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Tab as TabType } from '../types/Tab';

const tabsData: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const activeIndex = tabsData.findIndex(tab => tab.id === tabId);
  const isTabValid = activeIndex !== -1;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={activeIndex} onSelect={() => {}}>
        <TabList>
          {tabsData.map(tab => (
            <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
              <Link
                to={`/tabs/${tab.id}`}
                style={{ display: 'block', outline: 'none' }}
              >
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>

        {tabsData.map(tab => (
          <TabPanel key={tab.id}>
            {isTabValid && (
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>

      {!isTabValid && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
