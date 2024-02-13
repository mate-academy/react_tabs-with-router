import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const getClassActive = ({ isActive }: { isActive: boolean }) => cn(
    'navbar-item', { 'is-active': isActive },
  );

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getClassActive}>Home</NavLink>
            <NavLink to="/tabs" className={getClassActive}>Tabs</NavLink>
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
};
