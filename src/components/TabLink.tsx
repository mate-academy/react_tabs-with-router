import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { TabData } from '../types/TabData';

interface TabProps {
  tab: TabData,
}

export const TabLink:React.FC<TabProps> = ({ tab }) => {
  const { title, id } = tab;
  const { selectedTabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': selectedTabId === id })}
    >
      <Link
        to={`/tabs/${id}`}
      >
        {title}
      </Link>
    </li>
  );
};
