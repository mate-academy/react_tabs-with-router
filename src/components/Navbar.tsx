import { NavLink } from 'react-router-dom';
import { getLinkClass } from '../services/services';

export const Navbar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={getLinkClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
