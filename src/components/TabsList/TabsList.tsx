import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { TabInterface } from '../../interfaces/TabInterface';

type TabsList = {
  tabs: TabInterface[];
  active: string;
};

export const TabsList: FC<TabsList> = ({ tabs, active }) => (
  <ul className="tabs" data-tabs id="example-tabs">
    {
      tabs.map((tab) => (
        <li className="tabs-title" key={tab.id}>
          <NavLink to={`/tabs/${tab.id}`} aria-selected={active === tab.id}>
            {tab.title}
          </NavLink>
        </li>
      ))
    }
  </ul>
);
