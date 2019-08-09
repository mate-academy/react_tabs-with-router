import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PropTypes from 'prop-types';
import initialTabs from './api/data';
import Tabs from './Tabs';

const TabsPage = ({ match }) => (
  <Jumbotron>
    <>
      <h1>Tabs Page</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style
        component for calling extra attention to featured
        content or information.
      </p>
      <Tabs tabs={initialTabs} currentTabId={match.params.tabId} />
    </>
  </Jumbotron>
);

TabsPage.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default TabsPage;
