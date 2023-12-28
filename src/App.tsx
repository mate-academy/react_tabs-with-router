import 'bulma/css/bulma.css';
import { NavLink, Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';

const getLincClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item',
  { 'is-active': isActive },
);

export const App = () => (
  <>
    <nav
      className="
      navbar
      is-light is-fixed-top
      is-mobile
      has-shadow
      has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLincClass}>Home</NavLink>
          <NavLink to="/tabs" className={getLincClass}>Tabs</NavLink>
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
