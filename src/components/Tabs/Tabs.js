import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, tabId }) => {
  const tabIndex = tabs.findIndex(tab => tab.id === tabId);

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
            {tabIndex === -1
              ? <h2>Error</h2>
              : tabs[tabIndex].content}
          </div>
        )
      }
    </div>
  );
};

export default Tabs;
