import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

export const Tab = ({ tab, index }) => (
  <li className="nav-item" key={index}>
    <NavLink
      to={`/tabs/${tab.id}`}
      className="nav-link text-warning"
      activeClassName="bg-dark"
    >
      {tab.title}
    </NavLink>
  </li>
);
