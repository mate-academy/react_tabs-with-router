import { Link, useParams } from 'react-router-dom';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { tabs } from '../../api/tabsApi';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedIndex = tabs.findIndex(t => t.id === tabId);
  const isValidTab = selectedIndex !== -1;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={isValidTab ? selectedIndex : -1}>
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab key={tab.id} data-cy="Tab" selectedClassName="is-active">
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>

        {isValidTab &&
          tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}

        {!isValidTab && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </Tabs>
    </>
  );
};
