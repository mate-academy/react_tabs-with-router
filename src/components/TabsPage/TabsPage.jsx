import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

export function TabsPage({ tabs }) {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1>Tabs Page</h1>
      <ul className="list">
        {tabs.map(tab => (
          <li
            className="list__item"
            key={tab.id}
          >
            <NavLink
              activeClassName="active"
              className="list__link"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab ? selectedTab.content : 'Choice tab'}
      </p>
    </>
  );
}

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
