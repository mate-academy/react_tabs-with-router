import cn from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';
import { Link } from 'react-router-dom';

type Props = {
  tab: Tab;
  currentTab: Tab | undefined;
};

export const TabItem: React.FC<Props> = ({ tab, currentTab }) => {
  const { title, id } = tab;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': currentTab?.id === id })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
