import React from 'react';
import { NavLink } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';
import { TabsPageProps } from '../PropTypes/PropTypes';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <ul className="nav nav-tabs">
      {tabs.map(({ title, id }) => (
        <li className="nav-item" key={id}>
          <NavLink className="nav-link" to={`/tabs/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
    <Tabs match={match} tabs={tabs} />
  </>
);

TabsPage.propTypes = TabsPageProps;

export default TabsPage;
