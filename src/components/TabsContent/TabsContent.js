import React from 'react';
import PropTypes from 'prop-types';

const TabsContent = ({ currentTabContent }) => (
  <p>{currentTabContent}</p>
);

TabsContent.propTypes = {
  currentTabContent: PropTypes.string.isRequired,
};

export default TabsContent;
