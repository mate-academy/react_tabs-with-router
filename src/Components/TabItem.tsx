import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': id === tabId })}
    >
      <Link to={id}>{title}</Link>
    </li>
  );
};
