import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';

export const NavBar: FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink
          path="/"
          text="Home"
          className="navbar-item"
        />

        <PageNavLink
          path="/tabs"
          text="Tabs"
          className="navbar-item"
        />
      </div>
    </div>
  </nav>
);
