import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.css';

export const Tabs = ({ tabs }) => (
  <div className=".app__tabs">
    {tabs.map(tab => (
      <NavLink
        to={`/tabs/${tab.id}`}
        key={tab.id}
        className="app__tablink"
        activeClassName="app__tablink app__tablink--active"
      >
        {tab.title}
      </NavLink>
    ))}
  </div>
);
