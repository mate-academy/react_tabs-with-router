import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabsData from '../TabsData';

TabsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

function TabsPage(props) {
  return (
    <div className="tabs-page-content">
      <h3>Tabs Page</h3>
      <Tabs
        TabsData={TabsData}
        tabId={props.match.params.tabId}
      />
    </div>
  );
}

export default TabsPage;
