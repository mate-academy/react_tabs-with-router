import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const NavbarHome = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/"
      className={classNames('navbar-item', {
        'is-active': pathname === '/',
      })}
    >
      Home
    </Link>
  );
};
