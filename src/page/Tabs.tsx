import { tabs } from '../Const/Tabs_Const';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TabsPage = ({ TabsList = tabs }) => {
  const { tabId } = useParams();

  // Find the index of the selected tab, or default to -1 (no selection)
  const selectedIndex = TabsList.findIndex(tab => String(tab.id) === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}>
        <TabList className="tabs is-boxed">
          <ul>
            {TabsList.map(tab => (
              <Tab
                key={tab.id}
                data-cy="Tab"
                className={tabId === String(tab.id) ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </ul>
        </TabList>

        {selectedIndex !== -1 ? (
          TabsList.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </Tabs>
    </>
  );
};
