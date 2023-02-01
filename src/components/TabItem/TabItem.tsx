import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  currentTabId: string;
}

export const TabItem: React.FC<Props> = ({
  tab,
  currentTabId,
}) => {
  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': currentTabId === tab.id })}
    >
      <Link
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
