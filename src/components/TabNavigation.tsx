import React, { useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
};

export const TabNavigation: React.FC<Props> = ({ tab }) => {
  const liRef = useRef<HTMLLIElement>(null);
  const { tabId } = useParams();

  const liClass = tabId === tab.id ? 'is-active' : '';

  return (
    <li
      ref={liRef}
      data-cy="Tab"
      className={liClass}
    >
      <NavLink to={`${tab.id}`}>
        {tab.title}
      </NavLink>
    </li>
  );
};
