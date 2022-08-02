import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [active, setActive] = useState('Home');

  return (
    <header>
      <nav
        className="navbar has-navbar-fixed-top has-background-light"
        data-cy="nav"
      >
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link
              to="/"
              className={classNames(
                'navbar-item',
                { 'is-active': active === 'Home' },
              )}
              onClick={() => setActive('Home')}
            >
              Home
            </Link>

            <Link
              to="/tabs"
              className={classNames(
                'navbar-item',
                { 'is-active': active === 'Tabs' },
              )}
              onClick={() => setActive('Tabs')}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
