import cn from 'classnames';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    if (window.location.hash === '#/home') {
      navigation('/');
    }
  }, []);

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn('navbar-item',
              { 'is-active': location.pathname === '/' })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={cn('navbar-item',
              { 'is-active': location.pathname.startsWith('/tabs') })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
