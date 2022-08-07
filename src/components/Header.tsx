/* eslint-disable no-console */
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const createClassName = ({ isActive }: { isActive: boolean }) => {
    const createdClass = 'nav-link';

    if (isActive) {
      return `${createdClass} active`;
    }

    return createdClass;
  };

  return (
    <div className="tabs is-boxed">
      <ul className="nav nav-tabs">
        <li>
          <NavLink
            to="/"
            className={createClassName}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={createClassName}
            to="tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
