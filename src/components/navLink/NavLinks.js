import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <div className="links">
      <Link
        to="/"
        className="ui primary button"
      >
        Home
      </Link>
      <Link
        to="/tabs"
        className="ui secondary button"
      >
        Tabs
      </Link>
    </div>
  );
}

export default NavLinks;
