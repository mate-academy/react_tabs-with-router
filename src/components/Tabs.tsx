import React from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tab: Tab;
  isActive: boolean;
};

export const Tabs: React.FC<Props> = ({ tab, isActive }) => (
  <li data-cy="Tab" className={classNames({ 'is-active': isActive })}>
    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
  </li>
);
