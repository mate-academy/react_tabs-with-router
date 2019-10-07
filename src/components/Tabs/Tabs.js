import React from 'react';

import { NavLink } from 'react-router-dom';

import './Tabs.css';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, match }) => (
  <>
    <ul className="tabs">
      {tabs.map(tab => (
        <li className="tabs__item" key={tab.id}>
          <NavLink
            className="tabs__button"
            activeClassName="tabs__button--active"
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Tab match={match} tabs={tabs} />
  </>
);

export default Tabs;
