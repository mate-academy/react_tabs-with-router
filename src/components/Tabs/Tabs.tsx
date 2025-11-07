import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import cn from 'classnames';

type Props = {
  tabs: Tab[];
  activeTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
