import { NavLink } from 'react-router-dom';
import 'bulma';

export const MainNavigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
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
          exact
          className="navbar-item"
          activeClassName="is-active"
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
