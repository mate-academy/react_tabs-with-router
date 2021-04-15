import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TabsPage = ({ tabs }) => (
  <div className="Tabs-Page">
    <Switch>
      {tabs.map(tab => (
        <Route
          path={`/tabs/${tab.id}`}
          key={tab.id}
        >
          {tab.content}
        </Route>
      ))}
      <Route path="/tabs">
        <h1>Please select a tab message</h1>
      </Route>
    </Switch>
  </div>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf.isRequired,
};
