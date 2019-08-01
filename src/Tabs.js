import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import './App.css';

const Tabs = ({ tabs, activeTabId }) => (
  <div>
    <h1 className="title">Tabs</h1>
    <div className="tabs">
      <nav className="tabs__nav">
        <ul
          className="tabs__list"
        >
          {tabs.map((tab, i) => (
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
              activeClassName="tab__title--active"
            >
              <li className="tab__title">{tab.title}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="tab__content">
        {tabs.filter(tab => (
          tab.id === activeTabId
        )).map(tab => (tab.content))}
      </div>
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTabId: PropTypes.string,
};

Tabs.defaultProps = {
  activeTabId: '',
};

export default Tabs;
