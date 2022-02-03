import { React } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { tabes } from './data_tabs';

export default function Tabs() {
  const tabs = tabes();

  return (
    <div
      className="tabs"
      style={{
        display: 'flex', flexDirection: 'column',
      }}
    >
      <ul>
        {tabs && tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              style={({ isActive }) => ({
                color: isActive ? 'red' : '',
              })}
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
