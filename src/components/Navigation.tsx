import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getClass = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', {
    'is-active': isActive,
  },
);

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
