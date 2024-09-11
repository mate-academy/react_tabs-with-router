import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

interface Props {
  tab: Tab;
  activeTabId: string | undefined;
}

export const TabItem: React.FC<Props> = ({ tab, activeTabId }) => {
  const { id, title } = tab;
  const isActiveTab = activeTabId === id;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isActiveTab,
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
