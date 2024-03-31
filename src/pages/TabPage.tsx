import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import cn from 'classnames';

type Props = {
  tab: Tab;
};

export const TabPage: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
