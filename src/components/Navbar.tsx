import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={(state) => (`navbar-item
                ${state.isActive
                ? 'is-active'
                : ''}`
            )}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={(state) => (`navbar-item
              ${state.isActive
                ? 'is-active'
                : ''}`
            )}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
