import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab,
  tabId: string,
}

export const TabItem: React.FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': tabId === tab.id,
      })}
    >
      <Link
        to={`../${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
