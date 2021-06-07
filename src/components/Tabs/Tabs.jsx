import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabId, onFilterTabs }) => {
  const currentTab = onFilterTabs(tabId);

  return (
    <p>{currentTab.content}</p>
  );
};

Tabs.propTypes = {
  tabId: PropTypes.string.isRequired,
  onFilterTabs: PropTypes.func.isRequired,
};
