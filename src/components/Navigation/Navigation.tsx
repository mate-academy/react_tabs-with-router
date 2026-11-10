import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/tabs', label: 'Tabs' },
] as const;

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  const checkIsActive = (path: string, currentPath: string): boolean => {
    if (path === '/') {
      return currentPath === '/';
    }

    return currentPath.startsWith(path);
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`navbar-item ${checkIsActive(path, pathname) ? 'is-active' : ''}`}
              data-cy="NavItem"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
