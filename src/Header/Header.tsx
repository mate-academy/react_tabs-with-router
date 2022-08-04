import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Header.scss';

type Status = { isActive: boolean};

const getActiveClasses = (status: Status) => classNames(
  'navbar-item',
  { 'is--active': status.isActive },
);

export const Header:React.FC = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={getActiveClasses}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={getActiveClasses}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
