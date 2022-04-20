import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Tab } from '../types';
import '../App.scss';

type Props = {
  tabs: Tab[],
};

// eslint-disable-next-line max-len
export const Tabs: React.FC<Props> = React.memo(({ tabs }) => {
  return (
    <div className="tabs">
      <div className="buttons">
        {tabs.map(tab => (
          <NavLink key={tab.id} to={tab.id} className="button">
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
});
