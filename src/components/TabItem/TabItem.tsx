import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  isActive: boolean;
}

export const TabItem: React.FC<Props> = ({ tab, isActive }) => {
  return (
    <li className={cn({ 'is-active': isActive })} key={tab.id}>
      <Link to={`../${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
