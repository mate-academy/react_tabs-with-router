import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
}

export const TabsListItem: React.FC<Props> = ({ tab }) => {
  const { title, id } = tab;

  const location = useLocation();
  const isActive = location.pathname.includes(id);

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': isActive })}>
      <Link to={`./${id}`}>{title}</Link>
    </li>
  );
};
