import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <ul>
            <li
              className={classNames('navbar-item', {
                'is-active': location.pathname === '/',
              })}
            >
              <Link
                to="/"
                className={classNames({
                  'is-active': location.pathname === '/',
                })}
              >
                Home
              </Link>
            </li>
            <li
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
            >
              <Link
                to="/tabs"
                className={classNames({
                  'is-active': location.pathname.startsWith('/tabs'),
                })}
              >
                Tabs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
