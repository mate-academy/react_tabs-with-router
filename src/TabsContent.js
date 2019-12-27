import React from 'react';
import PropTypes from 'prop-types';

const TabsContent = ({ currentTab }) => (
  <p>{currentTab.content}</p>
);

TabsContent.propTypes = {
  currentTab: PropTypes.string.isRequired,
};

export default TabsContent;
