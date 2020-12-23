import React from 'react';
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const TabsPage = ({ tabs }) => {
  const match = useRouteMatch();

  return (
    <>
      <h2>Tabs page</h2>
      <nav className="navtab">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            className="navtab"
            to={`${match.path}/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <Switch>
        {tabs.map(tab => (
          <Route key={tab.title} path={`${match.path}/${tab.id}`}>
            <h3>{tab.content}</h3>
          </Route>
        ))}
        <Route><h3 className="tab">Please select a tab!</h3></Route>
      </Switch>
    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
