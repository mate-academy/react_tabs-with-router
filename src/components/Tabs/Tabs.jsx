import React from 'react';
import { tabs } from '../../App';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';

export const Tabs = ({ match }) => {
  const currentTab = tabs.find(tab => tab.id === match.params.tabId)

  return (
    <section className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li key={tab.id} className="tabs__item">
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tabs__link"
              activeClassName="tabs__link_active"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="tabs__info">
        {currentTab && (
          <p>{currentTab.content}</p>
        )}
      </div>
    </section>
  )
}