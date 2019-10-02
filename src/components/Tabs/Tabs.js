import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './Tabs.css';

const Tabs = ({ tabs, match }) => (
  <div className="tabs-container">
    <div className="tabs-header">
      {tabs.map(tab => (
        <NavLink
          className="tab-item"
          activeClassName="tab-item--active"
          to={`/tabs/${tab.id}`}
          key={tab.id}
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
    <div className="tab-body">
      {tabs.find(tab => tab.id === match.params.id) === undefined
        ? ''
        : tabs.find(tab => tab.id === match.params.id).content
      }
    </div>

    {/* <Switch> */}
    {/*  <Route */}
    {/*    path={`${match.path}/:tabId`} */}
    {/*    render={({ match }) => ( */}
    {/*      <div className="tab-body"> */}
    {/*        {tabs.find(tab => tab.id === match.params.tabId) === undefined */}
    {/*          ? '' */}
    {/*          : tabs.find(tab => tab.id === match.params.tabId).content */}
    {/*        } */}
    {/*      </div> */}
    {/*    )} */}
    {/*  /> */}
    {/* </Switch> */}
  </div>
);

export default Tabs;
