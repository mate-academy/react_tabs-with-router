import React from 'react';

import PropTypes from 'prop-types';

const HomePage = ({ children }) => (
  <>{children}</>
);

HomePage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HomePage;
