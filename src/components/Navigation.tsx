import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top has-shadow"
      data-cy="Nav"
    >
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
            'is-active': pathname.startsWith('/tabs'),
          })}
        >
          Tabs
        </Link>
      </div>
    </nav>
  );
};
