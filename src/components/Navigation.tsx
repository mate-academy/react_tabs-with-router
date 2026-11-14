
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

const links = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/tabs',
    title: 'Tabs',
  },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {links.map(link => {
            const isActive =
              link.to === '/'
                ? pathname === '/'
                : pathname === link.to ||
                  pathname.startsWith(`${link.to}/`);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn('navbar-item', {
                  'is-active': isActive,
                })}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
