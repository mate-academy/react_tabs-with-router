import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import { tabs } from './api';

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} match={match} />
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabsPage;
