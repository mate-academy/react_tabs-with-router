import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, currentTabId }) => (
  <>
    <nav>
      <ul className="tab-list">
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            className="tab-list__tab--title"
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
    </nav>
    <div className="tab-list__tab--current-content">
      {
        tabs.some(tab => tab.id === currentTabId) && (
        <>
          {tabs.find(tab => tab.id === currentTabId).content}
        </>
        )
      }
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTabId: PropTypes.string,
};
Tabs.defaultProps = {
  currentTabId: '',
};
export default Tabs;
