import React from 'react';
import {NavLink} from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({match}) => (
  <div>
    <h1>Tabs page</h1>
    <ul>
      {tabs.map(tab => (
        <li>
          <NavLink to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Tabs match={match} tabs={tabs} key={tabs.id} />
  </div>
);

export default TabsPage;
