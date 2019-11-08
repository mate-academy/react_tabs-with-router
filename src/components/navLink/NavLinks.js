import React from 'react';
import {
  NavLink
} from 'react-router-dom';

function NavLinks() {
  return (
    <div className="links">
      <NavLink
        to="#/"
        className="ui primary button"
      >
        Home
      </NavLink>
      <NavLink
        to="#/tabs"
        className="ui secondary button"
      >
        Tabs
      </NavLink>
    </div>
  );
}

export default NavLinks;
