import React from 'react';
import './TabsPage.scss';
import { NavLink } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <h1>
      Tabs
    </h1>
    <div className="tabs-container">
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink active to={`/tabs/${tab.id}`}>
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Tabs match={match} tabs={tabs} />
    </div>
  </>
);

export default TabsPage;
