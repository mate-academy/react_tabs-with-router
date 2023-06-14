import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [isActive, setIsActive] = useState('Home');

  const handleClick = (value: string) => {
    setIsActive(value);
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={isActive === 'Home'
              ? 'navbar-item is-active'
              : 'navbar-item'}
            onClick={() => handleClick('Home')}
          >
            Home
          </NavLink>
          <NavLink
            to="/TabsPage"
            className={isActive === 'Tabs'
              ? 'navbar-item is-active'
              : 'navbar-item'}
            onClick={() => handleClick('Tabs')}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
