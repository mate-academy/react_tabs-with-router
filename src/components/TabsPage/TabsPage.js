import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, tabId }) => (
  <>
    <h1>Tabs page</h1>
    <Tabs tabs={tabs} tabId={tabId} />
    <div className="tabs__content">
      {tabId && tabs[tabs.findIndex(tab => tab.id === tabId)].content}
    </div>
  </>
);

TabsPage.propTypes = {
  tabId: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default TabsPage;
