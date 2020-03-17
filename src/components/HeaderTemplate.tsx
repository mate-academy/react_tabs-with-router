import React from 'react';
import {NavLink} from 'react-router-dom';

export const HeaderTemplate = () => (
  <>
    <h1>Tabs with router</h1>
    <nav className="main-nav">
      <ul className="man-nav-item-wrapper">
        <li className="main-nav-item"><NavLink to="/" exact className="main-nav-link">Home</NavLink></li>
        <li className="main-nav-item"><NavLink to="/tabs" className="main-nav-link">Tabs</NavLink></li>
      </ul>
    </nav>
  </>
)
