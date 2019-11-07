import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

const TabsPage = ({ tabs, match }) => (
  <div>
    <h1>Tabs</h1>
    <Tabs tabs={tabs} match={match} />
  </div>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default TabsPage;
