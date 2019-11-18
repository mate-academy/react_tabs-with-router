import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <nav className="links">
      <Link
        to="/"
        activeClassName="active"
        className="ui primary button"
      >
        Home
      </Link>
      <Link
        to="/tabs"
        activeClassName="active"
        className="ui secondary button"
      >
        Tabs
      </Link>
    </nav>
  );
}

export default NavLinks;
