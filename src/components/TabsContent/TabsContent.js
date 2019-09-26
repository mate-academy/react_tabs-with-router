import React from 'react';
import PropTypes from 'prop-types';

const TabsContent = ({ tabs, currentTabId }) => (
  <>
    <p>{tabs.find(tab => tab.id === currentTabId).content}</p>
  </>
);

TabsContent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentTabId: PropTypes.string.isRequired,
};

export default TabsContent;
