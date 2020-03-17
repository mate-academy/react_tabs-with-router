import { NavLink } from 'react-router-dom';
import React from 'react';

import { tabs } from '../App';
import { HeaderTemplate } from './HeaderTemplate';

export const Tabs = () => (
  <>
    <HeaderTemplate />
    <h1>Tabs</h1>
    <ul className="tabs-item-container">
      {
        tabs.map(tab => (
          <li key={tab.id} className="tabs-item">
            <NavLink to={`/tabs/${tab.id}`} className="tabs-item-link">
              {tab.id}
            </NavLink>
          </li>
        ))
      }
    </ul>
  </>
);
