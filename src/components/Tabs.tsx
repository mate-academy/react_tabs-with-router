import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        {tabs.map(tab => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'inline-block',
                backgroundColor: 'black',
                color: isActive ? 'blue' : 'yellow',
                textDecoration: 'none',
                borderRadius: '5px',
                padding: '5px',
              };
            }}
            key={tab.id}
            to={tab.id}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
});
