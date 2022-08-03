import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = React.memo(() => {
  const createClassNames = ({ isActive }: { isActive: boolean }) => {
    const createdClass = 'nav-link';

    if (isActive) {
      return `${createdClass} active`;
    }

    return createdClass;
  };

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink
          className={createClassNames}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={createClassNames}
          to="/tabs"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  );
});
