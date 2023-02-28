import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  selectedTabId: string;
}

export const TabLabel: React.FC<Props> = React.memo(
  ({ tab, selectedTabId }) => {
    const {
      id,
      title,
    } = tab;

    const isActive = selectedTabId === id;

    return (
      <li
        data-cy="Tab"
        className={cn({ 'is-active': isActive })}
      >
        <Link to={`/tabs/${id}`}>
          {title}
        </Link>
      </li>
    );
  },
);
