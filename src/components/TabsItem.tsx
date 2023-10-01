import classNames from 'classnames';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabsItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === tab.id })}
    >
      <Link to={tab.id}>{tab.title}</Link>
    </li>
  );
};
