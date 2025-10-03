import { Link } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';
import { Tabs as ReactTabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface TabsProps {
  tabs: TabType[];
  activeTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const selectedIndex = activeTabId
    ? tabs.findIndex(tab => tab.id === activeTabId)
    : -1;

  if (selectedIndex === -1) {
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li key={tab.id} data-cy="Tab">
                <Link
                  to={`/tabs/${tab.id}`}
                  role="tab"
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    );
  }

  return (
    <div data-cy="TabsComponent">
      <ReactTabs selectedIndex={selectedIndex} onSelect={() => {}}>
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              selectedClassName="is-active" // 👈 додаємо Bulma-клас для вибраного табу
            >
              <Link to={`/tabs/${tab.id}`} role="tab" data-cy="TabLink">
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            <div className="block" data-cy="TabContent">
              {tab.content}
            </div>
          </TabPanel>
        ))}
      </ReactTabs>
    </div>
  );
};
