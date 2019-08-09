import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../App.css';

Tabs.propTypes = {
  TabsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string.isRequired,
};

function Tabs({ TabsData, tabId }) {
  const tabsText = 'Please choose the technology that you are interested';

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
