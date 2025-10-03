import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface TabsProps {
  tabs: Tab[];
  activeTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const activeTab = activeTabId
    ? tabs.find(tab => tab.id === activeTabId)
    : null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
                role="tab"
                aria-selected={tab.id === activeTabId}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
