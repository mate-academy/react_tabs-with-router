import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ currentTab }) => (
  <section>
    <div>{currentTab.content}</div>
  </section>
);

Tab.propTypes = {
  currentTab: PropTypes.string.isRequired,
};

export default Tab;
