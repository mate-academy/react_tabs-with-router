import React from 'react';
import { NavLink } from 'react-router-dom';

import './TabsPage.css';

import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <h1>Tabs page</h1>
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
    <Tabs match={match} tabs={tabs} />
  </>
);

export default TabsPage;
