import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

export const Tab = ({ tabs, currentTabId }) => (
  <>
    <ul
      className="nav nav-pills mb-3 justify-content-center"
      id="pills-tab"
      role="tablist"
    >
      {tabs.map((tab, i) => (
        <>
          <li className="nav-item" key={i}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="nav-link text-warning"
              activeClassName="bg-dark"
            >
              {tab.title}
            </NavLink>
          </li>
        </>
      ))}
    </ul>
    {tabs.some(elem => elem.id === currentTabId) && (
      <p className="tab-content">
        {tabs.find(elem => elem.id === currentTabId).content}
      </p>
    )}
  </>
);
