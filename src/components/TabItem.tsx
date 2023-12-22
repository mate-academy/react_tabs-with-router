import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  currentId: string | undefined,
  tab: Tab,
};

export const TabItem: React.FC<Props> = ({ currentId, tab }) => {
  const { id, title } = tab;

  return (
    <li
      key={id}
      data-cy="Tab"
      className={cn({
        'is-active': !!currentId && currentId === id,
      })}
    >
      <Link
        to={`../${id}`}
      >
        {title}
      </Link>
    </li>
  );
};
