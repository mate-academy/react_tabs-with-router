import { NavLink } from 'react-router-dom';
import { applyClassNames } from '../../utils/applyClassNames';

export const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) => (
              applyClassNames(isActive, 'navbar-item', 'isActive')
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={({ isActive }) => (
              applyClassNames(isActive, 'navbar-item', 'isActive')
            )}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
