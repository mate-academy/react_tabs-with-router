import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="main-nav nav">
      <NavLink exact to="/" activeClassName="is-active">
        <li>Home</li>
      </NavLink>
      <NavLink to="/tabs" activeClassName="is-active">
        <li>Tabs</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
