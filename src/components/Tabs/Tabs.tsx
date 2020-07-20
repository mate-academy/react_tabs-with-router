import React, { FC } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { TabsInterface } from '../../interfaces';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

interface TabsProps {
  tabs: TabsInterface[];
  path: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, path }) => (
  <div className="center">
    <h1 className="hading">Tabs</h1>
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.title}>
            <NavLink
              to={`${path}/${tab.id}`}
              className="nav-link"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab.title}>
            <Route path={`${path}/${tab.id}`} render={() => <Tab content={tab.content} />} />
          </li>
        ))}
      </ul>
    </nav>

  </div>
);
