import {
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import classNames from 'classnames';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { TabsPage } from './Tabs/TabsPage';

const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: 'tabs', element: <TabsPage />, name: 'Tabs' },
  { path: '/tabs/:userId', element: <TabsPage /> },
  { path: 'home', element: <Navigate to="/" /> },
  // eslint-disable-next-line
  { path: '*', element: <NotFound /> },
];

const createNavLink = (to: string, name = '') => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => classNames('navbar-item', { 'is-active': isActive })
    }
  >
    {name}
  </NavLink>
);

export const Navigation = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            {routes.slice(0, 2)
              .map(route => createNavLink(route.path, route.name))}
          </div>
        </div>
      </nav>

      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
