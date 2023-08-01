import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => {
  const handleClassActive = ({ isActive } : { isActive:boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={handleClassActive}>Home</NavLink>
            <NavLink to="/tabs" className={handleClassActive}>Tabs</NavLink>
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
