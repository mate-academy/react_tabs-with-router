import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className={classNames('navbar-item', {
              'is-active': activeLink === '/',
            })}
          >
            Home
          </Link>
          <Link
            to="/tabs"
            onClick={() => handleLinkClick('/tabs')}
            className={classNames('navbar-item', {
              'is-active': activeLink === '/tabs',
            })}
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
