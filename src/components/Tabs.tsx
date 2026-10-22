import { Tab } from '../types/Tab';
import { Link, useNavigate } from 'react-router-dom';
import {
  Tab as ReactTab,
  TabList,
  TabPanel,
  Tabs as ReactTabs,
} from 'react-tabs';

type Props = {
  tabs: Tab[];
  currentTab?: Tab;
};

export const Tabs = ({ tabs, currentTab }: Props) => {
  const navigate = useNavigate();

  const activeTabIndex = tabs.findIndex(tab => tab.id === currentTab?.id);

  return (
    <>
      <ReactTabs
        selectedIndex={activeTabIndex}
        selectedTabClassName="is-active"
        onSelect={index => {
          navigate(`/tabs/${tabs[index].id}`);
        }}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <ReactTab key={tab.id} data-cy="Tab">
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </ReactTab>
            ))}
          </TabList>
        </div>

        {currentTab &&
          tabs.map(tab => (
            <TabPanel key={tab.id}>
              <div className="block" data-cy="TabContent">
                {tab.content}
              </div>
            </TabPanel>
          ))}
      </ReactTabs>

      {!currentTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
