import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.scss';

export const Tab = ({ id, title }) => (
  <NavLink className="tab" activeClassName="tab--active" to={`/tabs/${id}`}>
    {`${title}`}
  </NavLink>
);
