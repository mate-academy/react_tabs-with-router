import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from './Tab';

interface Props {
  tabs: Tab[];
}

export const TabsNavigation: React.FC<Props> = ({ tabs }) => (
  <ul className="tabs__nav">
    {tabs.map(tab => (
      <li key={tab.id}>
        <NavLink className="tabs__link" to={`/tabs/${tab.id}`}>
          {tab.title}
        </NavLink>
      </li>
    ))}
  </ul>
);