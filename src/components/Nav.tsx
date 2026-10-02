import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkItem {
  title: string;
  to: string;
}

const navLinks: NavLinkItem[] = [
  { title: 'Home', to: '/' },
  { title: 'Tabs', to: '/tabs' },
];

const isLinkActive = (pathname: string, to: string) => {
  if (to === '/') {
    return pathname === '/';
  }

  return pathname === to || pathname.startsWith(`${to}/`);
};

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {navLinks.map(({ title, to }) => (
            <Link
              key={to}
              to={to}
              className={classNames('navbar-item', {
                'is-active': isLinkActive(pathname, to),
              })}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
