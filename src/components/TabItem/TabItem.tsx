import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface TabItemProps {
  tab: Tab;
  tabId: string | undefined;
}

export const TabItem: React.FC<TabItemProps> = ({ tab, tabId }) => (
  <li
    className={cn({
      'is-active': tab.id === tabId,
    })}
    data-cy="Tab"
  >
    <Link
      to={`/tabs/${tab.id}`}
      data-cy="Tab"
    >
      {tab.title}
    </Link>
  </li>
);
