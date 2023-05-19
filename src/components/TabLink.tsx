import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabLink: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': tab.id === tabId,
      })}
    >
      <Link
        className="navbar-item"
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
