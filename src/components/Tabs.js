import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Tab from './Tab';

const Tabs = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => (
  <ul className="tabs">
    <Route
      path="/tabs"
      render={({ match }) => tabs
        .map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            onTabSelected={onTabSelected}
            selectedTab={selectedTab}
            match={match}
          />
        ))
      }
    />
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default Tabs;
