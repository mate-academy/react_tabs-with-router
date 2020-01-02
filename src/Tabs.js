import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, currentTabId }) => (
  <div>
    <nav>
      <ul className="tabsList">
        {tabs.map(tab => (
          <li>
            <NavLink
              className="tab"
              activeClassName="active"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div>
      {tabs.find(tab => tab.id === currentTabId)
        ? tabs.find(tab => tab.id === currentTabId).content
        : ''}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTabId: PropTypes.string.isRequired,
};

export default Tabs;
