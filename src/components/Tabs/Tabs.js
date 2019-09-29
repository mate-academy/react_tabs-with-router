import React from 'react';

import PropTypes from 'prop-types';

const Tabs = ({ match, tabs }) => (
  <div>
    { tabs.map((tab) => {
      if (match !== undefined && tab.id === match.params.id) {
        return tab.title;
      }

      return null;
    })}
  </div>
);

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
