import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useParams } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tabs: TabType[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedIndex={selectedIndex}>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={
                'react-tabs__tab' +
                (index === selectedIndex ? ' is-active' : '')
              }
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id} data-cy="TabContent">
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
