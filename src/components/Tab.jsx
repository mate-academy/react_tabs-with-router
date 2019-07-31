import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ currentContent }) => (
  <div>{currentContent.content}</div>
);

Tab.propTypes = {
  currentContent: PropTypes.string.isRequired,
};

export default Tab;
