import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, tabId }) => (
  <>
    <h1>Tabs page</h1>
    <Tabs
      tabs={tabs}
      tabId={tabId}
    />
  </>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  tabId: PropTypes.string.isRequired,
};

export default TabsPage;
