import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Tabs = ({ tabs, tabId }) => (
  <div>
    <ul className="tab-container">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="tab-link"
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
    <p className="tab-text">
      {tabId ? tabs.find(tab => tab.id === tabId).content
        : ''}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.isRequired,
  tabId: PropTypes.string.isRequired,
};

export default Tabs;
