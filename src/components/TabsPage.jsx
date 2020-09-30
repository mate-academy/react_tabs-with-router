import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TabsPage.scss';

export const TabsPage = ({ tabs, match }) => {
  const currentTab = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className="button tabs__list--item"
          >
            <NavLink className="nav-link " to={`/tabs/${tab.id}`} exact>
              {tab.title}
            </NavLink>
          </button>
        ))}
      </div>
      {currentTab && (
        <p>
          {currentTab.content}
        </p>
      )}
    </div>
  );
};

TabsPage.defaultProps = {
  match: {},
};

TabsPage.propTypes = {
  match: PropTypes.objectOf,
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
