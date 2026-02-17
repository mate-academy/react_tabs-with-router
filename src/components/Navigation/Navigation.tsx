import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isActiveStyle = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isActiveStyle}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={isActiveStyle}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
