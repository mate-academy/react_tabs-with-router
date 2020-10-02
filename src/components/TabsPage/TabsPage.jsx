import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import './TabsPage.scss';

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
        <Link key={tab.id} to={`${match.path}/${tab.id}`}>
          <button
            className={classNames({
              button: true,
              button_active: location.pathname === `${match.path}/${tab.id}`,
            })}
            type="button"
          >
            {tab.title}
          </button>
        </Link>
      ))}

      <Switch>
        {' '}
        {
          tabs.map(tab => (
            <Route key={tab.title} path={`${match.path}/${tab.id}`} exact>
              <div className="content">{tab.content}</div>
            </Route>
          ))
        }
      </Switch>
      {noTabSelected && <div className="content">Please choose a tab</div>}
    </>
  );
};
