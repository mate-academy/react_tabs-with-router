import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ tab }) => (
  <p className="text">
    {tab.content}
  </p>
);

TabContent.propTypes = {
  tab: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default TabContent;
