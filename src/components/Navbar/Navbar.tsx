import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';

export const Navbar: FC = () => (
  <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
    <div className="navbar-menu">
      <div className="navbar-start">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
