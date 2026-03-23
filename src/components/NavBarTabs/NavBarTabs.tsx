import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const NavBarTabs = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/tabs"
      className={classNames('navbar-item', {
        'is-active': pathname.startsWith('/tabs'),
      })}
    >
      Tabs
    </Link>
  );
};
