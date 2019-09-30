import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

const Tabs = ({ tabs, match }) => (
  <p className="tabs tabs__text">
    {match
      && tabs[tabs.findIndex(tab => tab.id === match)].content}
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
