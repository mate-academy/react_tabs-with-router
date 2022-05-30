import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = React.memo(() => {
  return (
    <div className="wrapper">
      <div className="content">
        <header className="Header">
          <NavLink className="Header__nav" to="/home">Home</NavLink>
          <NavLink className="Header__nav" to="/tabs">Tabs</NavLink>
        </header>

        <main className="Header__container">
          <Outlet />
        </main>
      </div>

      <footer className="Header__footer">
        <p>
          Created by
          {' '}
          <span> Eliza </span>
          {' '}
          2022 &copy;
        </p>
      </footer>
    </div>
  );
});
