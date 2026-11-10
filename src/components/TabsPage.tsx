import classNames from 'classnames';
import { Tab as TabType } from '../types/Tab';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { Link, useParams } from 'react-router-dom';

interface Props {
  tabs: TabType[];
}

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);
  const tabIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <Tabs selectedIndex={tabIndex !== -1 ? tabIndex : -1} onSelect={() => {}}>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <TabList>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab?.id;

            return (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </Link>
              </Tab>
            );
          })}
        </TabList>
      </div>

      {!activeTab && (
        <div data-cy="TabContent" className="block">
          Please select a tab
        </div>
      )}

      {tabs.map(tab => (
        <TabPanel key={tab.id}>
          {activeTab?.id === tab.id && (
            <div data-cy="TabContent" className="block">
              {tab.content}
            </div>
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};
