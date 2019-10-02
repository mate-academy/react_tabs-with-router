import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, match }) => (
  <div>
    <h2>Tabs</h2>
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
