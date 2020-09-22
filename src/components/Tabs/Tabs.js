import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.scss';

export const Tabs = ({ match, tabs }) => {
  const activeTab = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabs.map(tab => (
          <div key={tab.id} className="tabs__container">
            <NavLink
              className="tabs__link"
              activeClassName="tabs__link_active"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </div>
        ))}
      </div>

      <p className="tabs__content">
        {activeTab && activeTab.content}
      </p>
    </div>
  );
};
