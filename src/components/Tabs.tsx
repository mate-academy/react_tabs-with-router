import classNames from 'classnames';
import { TabProps } from '../types/TabProps';
import { Link } from 'react-router-dom';

export const Tabs: React.FC<TabProps> = ({ tabs, activeTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
