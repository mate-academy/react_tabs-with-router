import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="#/"
            className={`navbar-item${pathname === '/' ? ' is-active' : ''}`}
            onClick={e => {
              e.preventDefault();
              navigate('/');
            }}
          >
            Home
          </a>

          <a
            href="#/tabs"
            className={`navbar-item${pathname.startsWith('/tabs') ? ' is-active' : ''}`}
            onClick={e => {
              e.preventDefault();
              navigate('/tabs');
            }}
          >
            Tabs
          </a>
        </div>
      </div>
    </nav>
  );
};
