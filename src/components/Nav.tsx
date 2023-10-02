/* eslint-disable no-nested-ternary */
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              // className="navbar-item"
              className={({ isActive, isPending }) => (
                isPending
                  ? 'navbar-item' : isActive
                    ? 'navbar-item is-active' : 'navbar-item')}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              // className="navbar-item"
              className={({ isActive, isPending }) => (
                isPending
                  ? 'navbar-item' : isActive
                    ? 'navbar-item is-active' : 'navbar-item')}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

    </>
  );
};
