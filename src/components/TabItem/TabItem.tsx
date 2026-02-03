import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  activeTabId: string | null;
};

export const TabItem: React.FC<Props> = ({ tab, activeTabId }) => {
  const isActive = tab.id === activeTabId;

  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <Link data-cy="TabLink" to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
