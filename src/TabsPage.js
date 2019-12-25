import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

const TabsPage = ({ match }) => {
  const tabs = [
    {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    {
      id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
    },
    {
      id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
    },
  ];

  return (
    <>
      <h1>Tabs</h1>
      <div className="tabs">
        {tabs.map(({ title, id }) => (
          <NavLink
            key={title}
            to={`${match.path}/${id}`}
            exact
            className="tab"
            activeClassName="tab--active"
          >
            {title}
          </NavLink>
        ))}
      </div>
      <Route
        path={`${match.path}/:currentTabId`}
        render={({ match: { params } }) => (
          <article className="content">
            {(tabs.find(({ id }) => id === (
              params.currentTabId
            )) || {}).content}
          </article>
        )}
      />
    </>
  );
};

TabsPage.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default TabsPage;
