import React, { FC, useState } from 'react';
import {
  Route,
  Switch,
  NavLink,
  RouteComponentProps,
} from 'react-router-dom';
import { tabs } from '../../api';
import { Tab } from '../Tab';


export const Tabs: FC<RouteComponentProps> = ({ match }) => {
  const [singlTab, setSinglTab] = useState<Tab>(tabs[0]);


  const handleSetTab = (tab: Tab) => {
    setSinglTab(tab);
    // console.log(match.params.tabsId);
  };

  return (
    <>
      <h2>Tabs Page</h2>
      <nav>
        <ul className="lists">
          {tabs.map(tab => (
            <li key={tab.id} className="lists__item">
              <NavLink
                to={`${match.path}/${tab.id}`}
                className="lists__link"
                onClick={() => handleSetTab(tab)}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route
          path={`${match.path}`}
          render={() => (
            <Tab tab={singlTab} />
          )}
        />
      </Switch>
    </>
  );
};
