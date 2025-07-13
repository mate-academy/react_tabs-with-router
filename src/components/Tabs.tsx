import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type TabsProps = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames('', { 'is-active': tab.id === activeTabId })}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
