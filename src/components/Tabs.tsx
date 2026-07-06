import { Tabs as ReactTabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useParams } from 'react-router-dom';

type TabItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: TabItem[];
};

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const activeIndex = tabs.findIndex(tab => tab.id === tabId);
  const hasValidTab = activeIndex !== -1;

  return (
    <ReactTabs
      selectedIndex={hasValidTab ? activeIndex : 0}
      onSelect={() => {}}
    >
      <TabList>
        {tabs.map((tab, index) => {
          const isSelected = hasValidTab && index === activeIndex;

          return (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={`react-tabs__tab ${isSelected ? 'react-tabs__tab--selected' : ''}`}
              selectedClassName="react-tabs__tab--selected"
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
                style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
              >
                {tab.title}
              </Link>
            </Tab>
          );
        })}
      </TabList>

      {tabs.map((tab, index) => (
        <TabPanel key={tab.id}>
          {hasValidTab ? (
            <div data-cy="TabContent">
              {tab.content}
            </div>
          ) : (
            index === 0 ? (
              <div data-cy="TabContent">
                Please select a tab
              </div>
            ) : null
          )}
        </TabPanel>
      ))}
    </ReactTabs>
  );
};
