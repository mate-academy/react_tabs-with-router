import React from 'react';
import { NavLink } from 'react-router-dom';

const Tab = ({ title, id }) => (
  <NavLink className="tab" to={`/tabs/${id}`}>
    {title}
    {' '}
  </NavLink>
);

export default Tab;
