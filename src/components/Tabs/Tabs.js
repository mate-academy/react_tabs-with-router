import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Tabs.css';

const Tabs = ({ tabs, match }) => {
  const activeTab = tabs.find(tab => tab.id === match.params.id);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map(tab => (
          <NavLink
            className="tab-item"
            activeClassName="tab-item--active"
            to={`/tabs/${tab.id}`}
            key={tab.id}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="tab-body">
        {activeTab === undefined
          ? ''
          : activeTab.content
        }
      </div>
    </div>
  );
};

export default Tabs;
