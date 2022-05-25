import { NavLink } from 'react-router-dom';

export const MainNavigation = () => {
  return (
    <nav className="navbar is-primary is-spaced">
      <div className="navbar-brand">
        <NavLink
          to="/"
          exact
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className="navbar-item is-tab"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
