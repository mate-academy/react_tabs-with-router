import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ currentTab }) => (
  <p>{currentTab.content}</p>
);

Tab.propTypes = {
  currentTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tab;
