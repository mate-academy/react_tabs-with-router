import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="tabs">
            <ul>
              <li className={pathname === '/' ? 'is-active' : ''}>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li className={pathname.includes('/tabs') ? 'is-active' : ''}>
                <NavLink to="/tabs">Tabs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <Outlet />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <h1 className="title is-5">Ukraine @ 2022</h1>
        </div>
      </footer>
    </>
  );
};
