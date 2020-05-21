import React, { useState } from 'react';

import {
  useRouteMatch,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import classNames from 'classnames';

import './Tabs.css';

import Tab from '../Tab';

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
      <div className="wrap">
        <h1 className="title">
          Tabs
        </h1>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={classNames('tab', { 'is-active': currentTabId === tab.id })}
          >
            <NavLink className="tab__link" key={tab.id} to={`${match.url}/${tab.id}`}>
              {tab.title}
            </NavLink>
          </button>
        ))}
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
