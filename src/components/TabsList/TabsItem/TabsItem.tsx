import React from 'react';
import { Tab } from '../../../types/Tab';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
};

export const TabsItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();
  const isLinkActive = (id: string) => id === tabId;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isLinkActive(tab.id) })}
      key={tab.id}
    >
      <NavLink to={`${tab.id}`}>{`${tab.title}`}</NavLink>
    </li>
  );
};
