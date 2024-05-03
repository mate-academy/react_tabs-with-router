import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface TabProps {
  tab: Tab;
}

export const TabComponent: React.FC<TabProps> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTab = tabId;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': ':' + tab.id === selectedTab,
      })}
    >
      <Link to={`/tabs/:${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
