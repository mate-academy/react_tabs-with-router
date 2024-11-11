import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

interface Props {
  tab: Tab;
}

export const Tabs: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : 0;

  return (
    <li data-cy="Tab" className={classNames({'is-active': selectedTabId === tab.id})}>
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
