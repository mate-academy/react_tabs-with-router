import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export interface Props {
  tab: Tab;
  tabId: string;
}

export const TabLink: FC<Props> = ({ tab, tabId }) => {
  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': tab.id === tabId })}
    >
      <Link
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
