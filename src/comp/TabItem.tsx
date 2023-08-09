import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface TabItemProps {
  tab: Tab;
}

const TabItem: React.FC<TabItemProps> = ({ tab }) => {
  const location = useLocation();
  const isActive = location.pathname === `/tabs/${tab.id}`;

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': isActive })}>
      <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
    </li>
  );
};

export default TabItem;
