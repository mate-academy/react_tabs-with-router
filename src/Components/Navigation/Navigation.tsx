import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [selectedNavLink, setSelectedNavLink] = useState<string>('Home');

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={classNames(
              'navbar-item',
              { 'is-active': selectedNavLink === 'Home' },
            )}
            onClick={() => setSelectedNavLink('Home')}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            className={classNames(
              'navbar-item',
              { 'is-active': selectedNavLink === 'Tabs' },
            )}
            onClick={() => setSelectedNavLink('Tabs')}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
