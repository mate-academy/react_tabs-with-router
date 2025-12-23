import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tab: TabType;
};

export const Tab: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};

