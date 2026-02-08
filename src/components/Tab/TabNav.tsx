import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { AppPath } from '../../types/paths';

interface Props {
  tabs: Tab[];
  activeTabId?: string;
}

export const TabNav = ({ tabs, activeTabId }: Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({ 'is-active': tab.id === activeTabId })}
        >
          <Link to={`/${AppPath.Tabs}/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
