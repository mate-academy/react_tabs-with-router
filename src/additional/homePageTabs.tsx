import React from 'react';
import { NavLink } from 'react-router-dom';

export const HomePageTabs = () => (
  <nav>
    <div>
      <ul className="nav">
        <li className="nav__item"><NavLink className="nav__item_link" activeClassName="nav__item_link-active" to="/" exact>Home</NavLink></li>
        <li className="nav__item"><NavLink className="nav__item_link" activeClassName="nav__item_link-active" to="/tabs">Tabs</NavLink></li>
      </ul>
    </div>
  </nav>
);
