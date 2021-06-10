import React from 'react';
import { NavLink } from 'react-router-dom';
import givenTabs from '../GivenTabs';
import { Tabs } from './Tabs';

export const TabsPage = () => (

  <div className="Tabs">
    <h2 className="subtitle">TabsPage</h2>
    {givenTabs.map(tab => (
      <NavLink
        to={`/tabs/${tab.id}`}
        key={tab.id}
        activeClassName="is-active"
      >
        {tab.title}
      </NavLink>
    ))}
    <Tabs
      tabs={givenTabs}
    />
  </div>
);
