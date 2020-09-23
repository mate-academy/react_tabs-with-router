/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Tabs = ({ tabs, match }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <NavLink
        to={`/tabs/${tab.id}`}
        className="tabs__link"
      >
        {tab.title}
      </NavLink>
    ))}
    {match.params.tabId
      && <p>{tabs.find(tab => tab.id === match.params.tabId).content}</p> }
  </div>
);
