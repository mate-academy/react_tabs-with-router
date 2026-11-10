import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
  isActive: boolean;
};

export const Tabs: React.FC<Props> = ({ tab, isActive }) => {
  return (
    <li data-cy="Tab" className={classNames({ 'is-active': isActive })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
