import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <h1>Tabs</h1>
    <ul className="nav nav-tabs">
      {tabs.map(item => (
        <li className="nav-item">
          <NavLink className="nav-link" to={`/tabs/${item.id}`}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Tabs match={match} tabs={tabs} />
  </>
);

TabsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default TabsPage;
