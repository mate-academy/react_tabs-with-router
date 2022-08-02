import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = React.memo(() => {
  const createClassNames = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return 'nav-link active';
    }

    return 'nav-link';
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
