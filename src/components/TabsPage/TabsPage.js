import React from 'react';

import PropTypes from 'prop-types';

import {
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';

import Tabs from '../Tabs/Tabs';

const TabsWithRouter = withRouter(Tabs);

const TabsPage = ({ match, tabs }) => (
  <div className="tabs-page">
    <h1>Tabs</h1>

    <div className="tabs">
      { tabs.map(tab => (
        <>
          <NavLink
            className="tab link"
            to={`${match.url}/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        </>
      ))
      }
    </div>

    <Route
      path={`${match.path}/:id?`}
      render={() => (
        <TabsWithRouter tabs={tabs} />
      )}
    />

  </div>
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default TabsPage;
