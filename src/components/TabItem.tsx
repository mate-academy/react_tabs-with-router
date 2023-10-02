import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  isSelected: boolean,
};

export const TabItem: React.FC<Props> = ({
  tab,
  isSelected,
}) => {
  return (
    <li
      data-cy="Tab"
      className={cn({
        'is-active': isSelected,
      })}
    >
      <Link
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </Link>
    </li>
  );
};
