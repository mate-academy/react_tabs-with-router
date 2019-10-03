import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => (
  tabs.map(tab => (
    <li className="tab" key={tab.id}>
      <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
    </li>
  ))
);

export default Tabs;
