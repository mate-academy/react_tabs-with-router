import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-menu">
              <div className="navbar-start">
                <NavLink to="/" className="navbar-item">Home</NavLink>
                <NavLink to="/tabs" className="navbar-item">Tabs</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          2022
        </div>
      </footer>
    </>
  );
};
