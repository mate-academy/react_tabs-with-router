import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
  onTabSelected: (tabId: string) => void;
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }: Props) => {
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
                data-cy="TabLink"
                onClick={() => onTabSelected(tab.id)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId ? (
          tabs.find(tab => tab.id === activeTabId)?.content
        ) : (
          <div>Please select a tab</div>
        )}
      </div>
    </div>
  );
};
