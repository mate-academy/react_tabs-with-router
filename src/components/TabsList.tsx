import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
  activeTabId: string;
};

export const TabsList: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const currentActiveTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={currentActiveTab?.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {currentActiveTab && (
        <div className="block" data-cy="TabContent">
          {currentActiveTab.content}
        </div>
      )}
    </div>
  );
};
