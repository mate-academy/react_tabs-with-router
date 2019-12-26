/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropsTypes from 'prop-types';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <ul className="tabs">
      {tabs.map(({ id, title }) => (
        <li className="tabs__link">
          <NavLink
            to={`${match.path}/${id}`}
            exact
            activeClassName="active__tab"
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Route
      path={`${match.path}/:currentTabId`}
      render={({ match }) => (
        <p className="tab__text">
          {(tabs.find(tab => tab.id === match.params.currentTabId) || {})
            .content
          }
        </p>
      )}
    />
  </>
);

TabsPage.propTypes = { match: PropsTypes.objectOf.isRequired };

export default TabsPage;
