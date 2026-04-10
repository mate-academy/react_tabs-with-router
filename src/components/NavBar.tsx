import classNames from 'classnames';
import { Link, useLocation, useParams } from 'react-router-dom';

export const NavBar = () => {
  const { pathname } = useLocation();
  const { tabId } = useParams();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames('navbar-item', {
              'is-active': pathname === '/tabs' || tabId,
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
