import { NavLink } from 'react-router-dom';

const classToggler = (isActive: boolean) => {
  return `navbar-item ${isActive && 'is-active'}`;
};

const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={({ isActive }) => classToggler(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="tabs"
            className={({ isActive }) => classToggler(isActive)}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
