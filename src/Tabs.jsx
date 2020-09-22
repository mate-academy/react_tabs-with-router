import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tabs = ({ tabs, match }) => (
  <div>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink
            className="tabs__item"
            activeClassName="activeTab"
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    {match.params.tabId && (
      <p className="text">{tabs.find(tab => tab.id === match.params.tabId).content}</p>)}
  </div>
);
