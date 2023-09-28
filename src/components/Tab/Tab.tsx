import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Item {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tab: Item,
  selectTabId?: string,
};

export const Tab: React.FC<Props> = ({ tab, selectTabId }) => {
  const isTabSelected = tab.id === selectTabId;

  return (
    <>
      <li
        key={tab.id}
        data-cy="Tab"
        className={cn({ 'is-active': isTabSelected })}
      >
        <Link to={`/tabs/${tab.id}`}>
          {tab.title}
        </Link>
      </li>
    </>
  );
};
