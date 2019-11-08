import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, tabId }) => {
  const tabCheck = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs__wrapper">
      <div className="tabs">
        {tabs.map(tab => (
          <div key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tab"
            >
              {tab.title}
            </NavLink>
          </div>
        ))}
      </div>
      {tabId
        && (
          <div className="tabs__content">
            {tabCheck
              ? tabCheck.content
              : <h2>Error</h2>}
          </div>
        )
      }
    </div>
  );
};

export default Tabs;
