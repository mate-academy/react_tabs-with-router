import React from 'react';
import { PageNavLink } from '../PageNavLink/PageNavLInk';

export const NavBar: React.FC = React.memo(() => {
  return (
    <nav
      data-cy="Nav"
      className="navbar is-light is-fixed-top is-mobile has-shadow"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" linkTitle="Home" />
          <PageNavLink to="/tabs" linkTitle="Tabs" />
        </div>
      </div>
    </nav>
  );
});
