import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

export const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs-page">
      <ul className="list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`}>
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="content">
        <p>{selectedTab ? selectedTab.content : 'Please select a tab'}</p>
      </div>
    </div>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
