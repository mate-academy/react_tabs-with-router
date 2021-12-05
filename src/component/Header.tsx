import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface IsActive {
  isActive: boolean;
}

const isActiveLink = ({ isActive }: IsActive) => classNames('header__link', { 'header__link--active': isActive });

export const Header: React.FC = () => (
  <header className="header">
    <NavLink
      to="/"
      className={isActiveLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className={isActiveLink}
    >
      Tabs
    </NavLink>
  </header>
);
