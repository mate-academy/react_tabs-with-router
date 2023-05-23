import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
  tabId?: string,
}

export const TabItem: FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': tab.id === tabId,
      })}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
