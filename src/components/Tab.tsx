import React from 'react';
import { Tab as TabType } from '../types/Tab';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  tab: TabType;
  selectedTab: string | undefined;
}

export const Tab: React.FC<Props> = ({ tab, selectedTab }) => {
  const { id, title } = tab;
  const isActive = id === selectedTab;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': isActive })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
