import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const links = [
    {
      to: '/',
      label: 'Home',
      classNames: cn('navbar-item', { 'is-active': pathname === '/' }),
    },
    {
      to: '/tabs',
      label: 'Tabs',
      classNames: cn('navbar-item', {
        'is-active': pathname.startsWith('/tabs'),
      }),
    },
  ];

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {links.map(({ to, label, classNames }) => (
            <Link key={to} to={to} className={classNames}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
