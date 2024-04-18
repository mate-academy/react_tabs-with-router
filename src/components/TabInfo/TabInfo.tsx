import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  isActive: boolean;
};

export const TabInfo: React.FC<Props> = ({ tab, isActive }) => {
  return (
    <li data-cy="Tab" className={classNames({ 'is-active': isActive })}>
      <Link to={`../${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
