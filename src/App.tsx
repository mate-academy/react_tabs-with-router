import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import { useEffect } from 'react';

const isActiveLink = (
  { isActive }: { isActive: boolean },
) => {
  return cn(
    'navbar-item',
    { 'is-active': isActive },
  );
};

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isActiveLink}>Home</NavLink>
            <NavLink to="/tabs" className={isActiveLink}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        {/* <div className="container">
          <h1 className="title">Home page</h1>
          <h1 className="title">Tabs page</h1>
          <h1 className="title">Page not found</h1>

          <div className="tabs is-boxed">
            <ul>
              <li data-cy="Tab" className="is-active">
                <a href="#/">Tab 1</a>
              </li>
              <li data-cy="Tab">
                <a href="#/">Tab 2</a>
              </li>
              <li data-cy="Tab">
                <a href="#/">Tab 3</a>
              </li>
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        </div> */}
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
