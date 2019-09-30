import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, activeTabId }) => (
  <div>
    <h2>Tabs</h2>
    <Tabs tabs={tabs} />
    {activeTabId
      ? (
        <p className="page-content">
          {tabs.find(tab => tab.id === activeTabId).content}
        </p>
      )
      : null}
  </div>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  activeTabId: PropTypes.string,
};

TabsPage.defaultProps = {
  activeTabId: '',
};

export default TabsPage;
