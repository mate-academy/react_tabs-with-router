import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId?: string;
  onTabSelect?: (id: string) => void;
}
export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelect }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === selectedTabId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': isActive,
              })}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => onTabSelect && onTabSelect(tab.id)}
              >
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
