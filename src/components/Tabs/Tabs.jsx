import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { TabPage } from '../TabPage';


export const Tabs = ({ tabs }) => {
  const [people, setPeople] = useState([]);

  return(
    <>
    <div className="tabs is-boxed my-tabs">
      <ul>
        <li>
          <NavLink
            activeClassName="active-tab"
            to="/tabs/tab-1"
          >
            Tab 1
          </NavLink>
        </li>
        <li>
        <NavLink
            activeClassName="active-tab"
            to="/tabs/tab-2"
          >Tab 2</NavLink>
        </li>
        <li>
        <NavLink
            activeClassName="active-tab"
            to="/tabs/tab-3"
          >Tab 3</NavLink>
        </li>
      </ul>
    </div>
    <Switch>
          <Route
            path="/tabs/:tabId"
          >
            <TabPage
              tabs={tabs}
            />
          </Route>
            <p>Not found todo</p>
        </Switch>
    </>
  );
};
