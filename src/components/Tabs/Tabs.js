import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Tabs.css';

const Tabs = ({ tabs, tabId }) => (
  <div className="wrapper">
    <div className="tabs">
      {tabs.map(tab => (
        <div key={tab.id}>
          <NavLink to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        </div>
      ))}
    </div>
    <div className="tabs__content">
      {tabId && tabs[tabs.findIndex(tab => tab.id === tabId)].content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string.isRequired,
};

export default Tabs;
