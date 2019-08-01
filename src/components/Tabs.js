import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, tabId }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <li className="tab" key={tab.id}>
        <Link
          to={`/tabs/${tab.id}`}
          exact
          activeClassName="selected"
          className="tab__title"
        >
          {tab.title}
        </Link>
      </li>
    ))}

    <p className="tab__content">
      {tabId
        ? tabs.find(tab => tab.id === tabId).content
        : null
      }
    </p>
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string.isRequired,
};

export default Tabs;
