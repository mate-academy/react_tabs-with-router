import React from 'react';
import './Layout.scss';

import { NavLink, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink to="/home" className="nav-link">
            Home page
          </NavLink>

          <NavLink to="/tabs" className="nav-link">
            Tabs page
          </NavLink>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
