import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tab = ({ match: { params: { currentTabId } }, tabs }) => {
  const tab = tabs.find(tabItem => tabItem.id === currentTabId);

  return (
    <header className="tabs">
      <nav className="ui orange three item menu">
        {tabs.map(tabItem => (
          <NavLink
            key={tabItem.id}
            activeClassName="active item"
            className="item"
            to={`/tabs/${tabItem.id}`}
          >
            {tabItem.title}
          </NavLink>
        ))}
      </nav>
      <p>{tab && tab.content}</p>
    </header>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  match: PropTypes.shape(
    { path: PropTypes.string.isRequired }
  ).isRequired,
};

export default Tab;
