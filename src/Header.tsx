import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar is-warning">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'is-active' : '')}
          >
            {({ isActive }) => (
              <button
                type="button"
                className={isActive ? 'button is-primary' : 'button is-info'}
              >
                Home
              </button>
            )}
          </NavLink>
        </div>

        <div className="navbar-item">
          <NavLink
            to="/tabs"
            className={(isActive) => (isActive ? 'is-active' : '')}
          >
            {({ isActive }) => (
              <button
                type="button"
                className={isActive ? 'button is-primary' : 'button is-info'}
              >
                Tabs
              </button>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
