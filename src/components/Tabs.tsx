import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsProps {
  tabs: Tab[];
  tabId: string | undefined;
}

export const Tabs = ({ tabs, tabId }: TabsProps) => {
  const selectedTab = tabId ? tabs.findIndex(tab => tab.id === tabId) : null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={index === selectedTab ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`} data-cy={`Tab${index + 1}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab !== null && selectedTab !== -1 ? (
        <div className="block" data-cy="TabContent">
          {tabs[selectedTab].content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
