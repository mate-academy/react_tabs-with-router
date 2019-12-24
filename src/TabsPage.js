import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

const TabsPage = ({ match }) => (
  <>
    <h1>Tabs Page</h1>
    <Tabs match={match} />
  </>
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabsPage;
