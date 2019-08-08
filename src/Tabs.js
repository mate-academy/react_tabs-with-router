import React from 'react';
import propTypes from 'prop-types';

const Tabs = ({ tabs, match }) => (
  <div>{tabs.map(tab => (tab.id === match.params.id ? tab.content : ''))}</div>
);

Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.object).isRequired,
  match: propTypes.objectOf(propTypes.any).isRequired,
};

export default Tabs;
