import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="tab-list__navigation">
    <Link
      to="/tabs"
      className="tab-list__navigation--element"
    >
    Tabs
    </Link>
    <Link
      to="/"
      className="tab-list__navigation--element"
    >
    Home
    </Link>
  </nav>
);

export default Navigation;
