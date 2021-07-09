import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import './TabsPage.scss';

export const TabsPage = ({ tabs }) => {
  const match = useRouteMatch('/tabs/:id?');
  const tabId = match.params.id;

  const selectedTab = tabs.find(tab => tab.id === tabId) || '';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="buttons-container">
        {tabs.map(tab => (
          ((tabId === tab.id) ? (
            <button
              type="button"
              className="button is-link"
            >
              {tab.title}
            </button>
          ) : (
            <Link
              to={`/tabs/${tab.id}`}
              className="button"
            >
              {tab.title}
            </Link>
          ))
        ))}
      </div>
      <div className="content-container">
        {(selectedTab.length === 0) ? (
          <p>Please select a tab</p>
        ) : (
          <p>{selectedTab.content}</p>
        )}
      </div>
    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
