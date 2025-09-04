// import { NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

const Navigation = () => {
  const location = useLocation();
  // const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  //   cn('navbar-item', {
  //     'is-active': isActive,
  //   });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={cn({ 'is-active': location.pathname === '/' })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={cn({ 'is-active': location.pathname === '/tabs' })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
