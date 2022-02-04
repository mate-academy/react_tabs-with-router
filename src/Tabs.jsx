import { React, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { tabes } from './data_tabs';

import './Tabs.scss';

export default function Tabs() {
  const tabs = tabes();
  const [active, setActive] = useState();

  return (
    <div
      className="tabs"
    >
      <ul>
        {tabs && tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(active === tab.id ? 'is-active' : '')}
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
