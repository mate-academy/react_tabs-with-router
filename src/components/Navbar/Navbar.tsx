import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { makeActive } from './Navbar.helpers';

export const Navbar: FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={makeActive}>Home</NavLink>

        <NavLink to="/tabs" className={makeActive}>Tabs</NavLink>
      </div>
    </div>
  </nav>
);
