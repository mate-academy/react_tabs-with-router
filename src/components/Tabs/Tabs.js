import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, match }) => (
  <p className="tabs tabs__name">
    {match
      && tabs[tabs.findIndex(item => item.id === match)].content}
  </p>
);

Tabs.propTypes = {
  tabs: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  match: PropTypes.string.isRequired,
};

export default Tabs;
