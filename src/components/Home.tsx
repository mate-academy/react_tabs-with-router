import { useState } from 'react';
import {
  Link, Navigate, Outlet, useLocation,
} from 'react-router-dom';
import cn from 'classnames';
import { LinkPath } from '../types/LinkPath';

export const Home = () => {
  const { pathname } = useLocation();
  const [selectedLink, setSelectedLink] = useState(pathname);

  const isTabsActive = selectedLink === LinkPath.Tabs || selectedLink.includes(`${LinkPath.Tabs}/`);

  const isHomeActive = selectedLink === LinkPath.Root
  || selectedLink === LinkPath.Home;

  if (pathname === LinkPath.Home) {
    return <Navigate to={LinkPath.Root} />;
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn(
                'navbar-item',
                { 'is-active': isHomeActive },
              )}
              onClick={() => setSelectedLink(LinkPath.Root)}
            >
              Home
            </Link>
            <Link
              to="tabs"
              className={cn(
                'navbar-item',
                { 'is-active': isTabsActive },
              )}
              onClick={() => setSelectedLink(LinkPath.Tabs)}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {pathname === LinkPath.Root
            ? <h1 className="title">Home page</h1>
            : <Outlet />}
        </div>
      </div>
    </>

  );
};
