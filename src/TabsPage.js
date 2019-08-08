import React from 'react';
import propTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import Tabs from './Tabs';

const TabsPage = ({ tabs }) => (
  <BrowserRouter>
    <h1>Tabs</h1>
    <ul>
      {
        tabs.map(tab => (
          <li key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
          </li>
        ))
      }
    </ul>

    <Switch>
      <Route
        path="/tabs/:id"
        exact
        render={({ match }) => <Tabs tabs={tabs} match={match} />}
      />
    </Switch>
  </BrowserRouter>
);

TabsPage.propTypes = {
  tabs: propTypes.arrayOf(propTypes.any).isRequired,
};

export default TabsPage;
