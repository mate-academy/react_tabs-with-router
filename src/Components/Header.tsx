import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Status {
  isActive: boolean;
}

export const Header: React.FC = () => {
  const isMenuActive = (status: Status): string | undefined => {
    return classNames('navbar-item', {
      'is-active': status.isActive,
    });
  };

  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              to="/"
              className={isMenuActive}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={isMenuActive}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
