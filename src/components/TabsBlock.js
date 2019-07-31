import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TabsBlock = ({
  tabs, activeTab, onTabChange, match,
}) => (
  <div className="TabsBlock">
    <h2>You are in Right Place</h2>

    <ul className="TabsBlock--tabs">
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink
            to={`${match.match.url}/${tab.id}`}
            exact
            name={tab.id}
            onClick={onTabChange}
            className="TabsBlock--tab"
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="TabsBlock--content">
      <p>
        {activeTab ? tabs.find(tab => tab.id === activeTab).content : ''}
      </p>
    </div>
  </div>
);

TabsBlock.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TabsBlock;
