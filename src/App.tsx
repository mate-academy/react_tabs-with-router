import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const getActiveClass = ({ isActive } : { isActive: boolean }) => classNames(
    'navbar-item', {
      'is-active': isActive,
    },
  );

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getActiveClass}>Home</NavLink>
            <NavLink to="/tabs" className={getActiveClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
