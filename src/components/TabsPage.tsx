import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tabs, TabList, Tab } from 'react-tabs';
import { Tab as TabType } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: TabType[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedTab = tabs.find(tab => tab.id === tabId);
  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex === -1 ? 0 : selectedIndex}
        onSelect={(index: number) => {
          navigate(`/tabs/${tabs[index].id}`);
        }}
      >
        <div className="tabs is-boxed">
          <TabList>
            {tabs.map(tab => (
              <Tab
                data-cy="Tab"
                key={tab.id}
                className={classNames({ 'is-active': tab.id === tabId })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </Tab>
            ))}
          </TabList>
        </div>
      </Tabs>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
