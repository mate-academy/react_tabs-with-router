import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  selectedTabId: string | undefined,
};

export const TabContent: React.FC<Props> = ({ tab, selectedTabId }) => {
  return (
    <li
      data-cy="Tab"
      key={tab.id}
      className={cn({ 'is-active': selectedTabId === tab.id })}
    >
      <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
        {tab.title}
      </Link>
    </li>
  );
};
