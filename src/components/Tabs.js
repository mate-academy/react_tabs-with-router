import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, match }) => (
  <>
    <h1>Tabs</h1>
    <ul>
      {tabs.map(tab => (
        <li key={tab.id}>
          <NavLink
            to={`/tabs/${tab.id}`}
            activeClassName="chosen"
          >
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    {tabs.map(tab => (tab.id === match.params.tabId
      ? <p key={tab.id}>{tab.content}</p>
      : ''
    ))}
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
};

export default Tabs;
