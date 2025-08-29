import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();

  return (
    <html className="has-navbar-fixed-top">
      <body>
        <nav
          className="navbar is-light is-fixed-top is-mobile has-shadow"
          data-cy="Nav"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link
                to="/"
                className={classnames('navbar-item', {
                  'is-active': location.pathname === '/',
                })}
              >
                Home
              </Link>
              <Link
                to="/tabs"
                className={classnames('navbar-item', {
                  'is-active': location.pathname.includes('/tabs'),
                })}
              >
                Tabs
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </body>
    </html>
  );
};
