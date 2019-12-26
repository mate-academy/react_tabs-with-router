import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import tabsData from './tabsData';

const Tabs = () => (
  <>
    <div>
      {tabsData.map(tab => (
        <NavLink
          to={`/tabs/${tab.id}`}
          activeClassName="tab__active "
          className="tab"
        >
          {tab.title}
        </NavLink>
      ))}
    </div>

    <Route
      path="/tabs/:tabId"
      render={({ match }) => {
        const activeTab = tabsData.find(tab => tab.id === match.params.tabId);

        return activeTab
          ? (
            <div className="tab__text">
              {activeTab.content}
            </div>
          )
          : '';
      }}
    />
  </>
);

export default Tabs;
