import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  isActive: boolean,
};

export const TabLink: React.FC<Props> = ({ tab, isActive }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isActive,
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
