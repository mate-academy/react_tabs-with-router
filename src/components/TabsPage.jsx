import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';
import { NavLink } from 'react-router-dom';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

export const TabsPage = ({ match }) => {
  const { tabId: selectedTabId } = match.params;

  return (
    <nav>
      <div className="nav nav-tabs">
        {tabs.map(tab => (
          <NavLink
            type="button"
            className="nav-link"
            activeClassName="active"
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <p className="lead">
        {tabs.find(tab => tab.id === selectedTabId)
          ? tabs.find(tab => tab.id === selectedTabId).content
          : 'Please select a tab'
          }
      </p>
    </nav>
  );
};

TabsPage.propTypes = {
  match: PropTypes.shape().isRequired,
};
