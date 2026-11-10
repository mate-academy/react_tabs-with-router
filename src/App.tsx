import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useMatch } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const matchHome = useMatch({ path: '/', end: true });
  const matchTabs = useMatch('/tabs/*');


  return (
    <>
      <nav className="navbar is-light is-mobile has-shadow " data-cy="Nav">
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': matchHome,
              })}
            >
              Home
            </Link>
            <Link
              to="tabs"
              className={classNames('navbar-item', {
                'is-active': matchTabs,
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
