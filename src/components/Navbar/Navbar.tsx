import { FC, memo } from 'react';
import { NavItem } from '../NavItem';

export const Navbar: FC = memo(() => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavItem to="/" text="Home" />
          <NavItem to="tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
});
