import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';

export const NavBar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" content="Home" />
          <PageNavLink to="/tabs" content="Tabs" />
        </div>
      </div>
    </nav>
  );
};
