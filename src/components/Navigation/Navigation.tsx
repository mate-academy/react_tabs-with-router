import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
}

const CustomNavLink: React.FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
  >
    {children}
  </NavLink>
);

export const Navigation: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <CustomNavLink to="/">
            Home
          </CustomNavLink>

          <CustomNavLink to="/tabs">
            Tabs
          </CustomNavLink>
        </div>
      </div>
    </nav>
  );
};
