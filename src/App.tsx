import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });
const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'red' : '',
});

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" end className={getLinkClass} style={getLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass} style={getLinkStyle}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <Outlet />
    </div>
  </>
);
