import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab }) => (
  <p>{tab.content}</p>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tab;
