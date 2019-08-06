import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Tabs({ TabsData, tabId }) {
  const tabsText = 'Please choose the technology that you arre interested';

  return (
    <div>
      <ul className="list">
        {TabsData.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabsdata/${tab.id}`}
              activeClassName="active"
              exact
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="content-text">
        {tabId
          ? TabsData.find(tab => tab.id === tabId).content : tabsText}
      </p>
    </div>
  );
}

export default Tabs;
