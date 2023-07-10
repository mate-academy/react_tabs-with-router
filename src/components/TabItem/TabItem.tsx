import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { id } = useParams();

  return (
    <li data-cy="Tab" className={cn({ 'is-active': tab.id === id })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
