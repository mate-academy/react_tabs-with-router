import 'react-tabs/style/react-tabs.css';
import { useContext } from 'react';
import { Tabs, TabList, Tab } from 'react-tabs';
import { Tabs as TabsContext } from '../../Context/Context';
import { Link, useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);
  const tabContent =
    selectedIndex === -1 ? 'Please select a tab' : tabs[selectedIndex].content;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={() => {}}
        className=""
        selectedTabClassName="is-active"
      >
        <TabList className="tabs is-boxed">
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
      </Tabs>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
