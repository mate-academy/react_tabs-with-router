import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { TabsSection } from './TabsSection';

const getLinkClass = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', {
    'is-active': isActive,
  })
);

export const App = () => {
  const location = useLocation();
  const isTabsPage = location.pathname.includes('tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={getLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getLinkClass}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />

          {isTabsPage && (<TabsSection />)}
        </div>
      </div>
    </>
  );
};
