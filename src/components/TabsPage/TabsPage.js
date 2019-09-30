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
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string.isRequired,
};

export default TabsPage;
