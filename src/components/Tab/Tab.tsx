import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';

interface TabProps {
  id: string,
  title: string,
}

export const Tab: React.FC<TabProps> = ({ id, title }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <NavLink
        to={`/tabs/${id}`}
        className={({ isActive: active }) => {
          setIsActive(active);

          return '';
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};
