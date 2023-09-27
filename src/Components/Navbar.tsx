import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const className = ({ isActive }: { isActive: boolean }) => cn('navbar-item',
  { 'is-active': isActive });

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={className}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={className}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
