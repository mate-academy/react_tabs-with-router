import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  const [isActive, setIsActive] = useState<string>('home');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/home"
              className={cn(
                'navbar-item',
                {
                  'is-active': isActive === 'home',
                },
              )}
              onClick={() => {
                setIsActive('home');
              }}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={cn(
                'navbar-item',
                {
                  'is-active': isActive === 'tabs',
                },
              )}
              onClick={() => {
                setIsActive('tabs');
              }}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
};
