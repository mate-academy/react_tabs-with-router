import React, { useEffect, useState } from 'react';
import { Link, Switch, Route, NavLink, useParams, } from 'react-router-dom';
import classNames from 'classnames';
import './TabsPage.scss';
import { Content } from '../Content/Content';

export const TabsPage = ({ tabs, match, location }) => {
  const [noTabSelected, setNoTabSelected] = useState(false);

  useEffect(() => {
    const address = location.pathname.split('/');
    const tabId = address[address.length - 1];

    if (!tabs.find(tab => tab.id === tabId)) {
      setNoTabSelected(true);
    } else {
      setNoTabSelected(false);
    }
  }, [location.pathname]);

  return (
    <>
      <h1>This is a tabs page</h1>
      {tabs.map(tab => (
        <NavLink activeClassName="button_active" key={tab.id} to={`${match.path}/${tab.id}`}>
          <button
            className="button"
            type="button"
          >
            {tab.title}
          </button>
        </NavLink>
      ))}
      <Route path={`${match.path}/:id`} render={({ match }) => (
        <Content tabs={tabs} match={match}></Content>
      )}>
      </Route>
      {noTabSelected && <div className="content">Please choose a tab</div>}
    </>
  );
};
