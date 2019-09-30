import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ match, tabs }) => (
  <p>
    {tabs.find(item => item.id === match.params.tabId)
      && tabs.find(item => item.id === match.params.tabId).content}
  </p>
);

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
