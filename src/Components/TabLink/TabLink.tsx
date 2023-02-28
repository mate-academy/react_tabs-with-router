import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  tabId: string;
}

export const TabLink: React.FC<Props> = React.memo(({ tab, tabId }) => {
  const {
    id,
    title,
  } = tab;

  const isActive = tabId === id;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': isActive })}>
      <Link to={`/tabs/${id}`}>
        {title}
      </Link>
    </li>
  );
});
