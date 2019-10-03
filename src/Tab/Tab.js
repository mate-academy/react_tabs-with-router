import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab }) => <div className="tab-pane">{tab.content}</div>;

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tab;
