import React, { useState } from 'react';

import {
  useRouteMatch,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import classNames from 'classnames';

import Tab from './Tab';

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const match = useRouteMatch();
  const [currentTabId, setCurrentTabId] = useState(tabs[0].id);

  const activeTabId = (id: string) => {
    setCurrentTabId(id);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Tabs
            </h1>
          </div>
        </div>
      </section>
      <div className="tabs is-medium">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({'is-active': currentTabId === tab.id })}
            >
              <NavLink key={tab.id} to={`${match.url}/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Switch>
          <Route path={`${match.path}/:tabId`}>
            <Tab
              tabs={tabs}
              activeTabId={activeTabId}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Tabs;
