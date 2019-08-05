import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ tabId, tabs }) => (
  <div className="tabs">
    <ul>
      {tabs.map(tab => (
        <li key={tab.id}>
          <Link to={`/tabs-with-router/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
      <p>
        {tabId && tabs.find(tab => tab.id === tabId).content}
      </p>
    </ul>
  </div>
);

Tabs.propTypes = {
  tabId: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf().isRequired,
};

export default Tabs;
