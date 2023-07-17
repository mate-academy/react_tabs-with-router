import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface TabItemProps {
  tab: Tab;
  selectedTabId: string | null;
}

export const TabItem: React.FC<TabItemProps> = ({ tab, selectedTabId }) => (
  <li
    className={cn({
      'is-active': tab.id === selectedTabId,
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
