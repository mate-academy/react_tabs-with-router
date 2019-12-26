import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab }) => (
  <div>{tab.content}</div>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Tab;
