import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tab: Tab;
  tabId?: string;
};

export const TabItem: React.FC<Props> = ({ tab, tabId }: Props) => {
  return (
    <li data-cy="Tab" className={tab.id === tabId ? 'is-active' : ''}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
