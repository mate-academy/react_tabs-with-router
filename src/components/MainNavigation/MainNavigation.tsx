import { NavLink } from 'react-router-dom';

export const MainNavigation = () => (
  <nav>
    <div className="menu box">
      <div className="menu-list">
        <NavLink
          to="/"
          exact
          className="navbar-item"
          activeClassName="is-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="navbar-item"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
