import { FC } from 'react';
import { MenuLink } from '../MenuLink.tsx/MenuLink';

export const MainNav: FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <MenuLink to="/" text="Home" />
        <MenuLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
