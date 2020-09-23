/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { tabs } from '../App';

export const Tabs = ({ match }) => {
  const currentTab = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <div className="tabs">
      <h1>Tabs Page</h1>
      <ul className="sub-nav nav">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            activeClassName="is-active"
          >
            <li>
              {tab.title}
            </li>
          </NavLink>
        ))}
      </ul>
      {currentTab && (
        <h2>{currentTab.content}</h2>
      )}
    </div>
  );
};
