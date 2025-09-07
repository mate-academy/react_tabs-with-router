import { Link, useParams, Navigate } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { PageNotFound } from './PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);

  if (tabId && activeTabIndex === -1) {
    return <Navigate to="/404" replace />; // Или рендери <PageNotFound /> прямо здесь
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs defaultIndex={activeTabIndex === -1 ? 0 : activeTabIndex}>
        <TabList className="tabs is-boxed">
          {tabs.map(tab => {
            return (
              <Tab
                data-cy="Tab"
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            );
          })}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
            {tabId === tab.id ? tab.content : 'Please select a tab'}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
