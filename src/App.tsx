import { NavLink, Outlet } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar-item is-active' : 'navbar-item';

const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'blue' : 'black',
});

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClass} style={getLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getNavLinkClass} style={getLinkStyle}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
