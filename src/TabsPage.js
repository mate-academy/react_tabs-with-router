import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabsPage = ({ tabs, match }) => (
  <>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tab">
          <NavLink to={`${match.path}/${tab.id}`}>
            <span className="red-text text-darken-1">{tab.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>

    <Route
      path={`${match.path}/:tabId`}
      render={
        ({ match: renderMatch }) => (
          <Tab tab={tabs.find(tab => tab.id === renderMatch.params.tabId)} />
        )
      }
    />
  </>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default TabsPage;
