import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs = ({ tabs, activeTabId }: Props) => {
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
                className="tab-link"
                replace
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId && tabs.some(tab => tab.id === activeTabId) ? (
          tabs.find(tab => tab.id === activeTabId)!.content
        ) : (
          <div>Please select a tab</div>
        )}
      </div>
    </div>
  );
};
