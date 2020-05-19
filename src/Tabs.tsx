import { Route, NavLink, Redirect } from 'react-router-dom';
import React from 'react';
import { TabsPropsType } from './interfaces';
import { Tab } from './Tab';


export const Tabs = ({
  tabs,
  currentTabId,
  componentURL,
}: TabsPropsType) => {
  return (
    <>
      <nav>
        <ul className="tabs__list">
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className="tabs__list-item"
              >
                <NavLink
                  to={componentURL + tab.id}
                >
                  {tab.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Redirect from="/tabs/" to={`/tabs/${currentTabId}`} />
      {tabs.map(tab => {
        return (
          <Route
            key={componentURL + tab.id}
            path={componentURL + tab.id}
            component={() => (<Tab content={tab.content} />)}
          />
        );
      })}
    </>
  );
};
