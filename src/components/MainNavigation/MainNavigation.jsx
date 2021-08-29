import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './MainNavigation.scss';


export const MainNavigation = withRouter(match => (
  <div className="main-navigation">

    <NavLink
      className="main-link"
      activeClassName="main-link--active"
      to="/"
       exact
    >
      Home
    </NavLink>
    <NavLink
      className="main-link" 
      activeClassName="main-link--active" 
      to="/tabs"
    >
      TabsPage
    </NavLink>

  </div>
));
