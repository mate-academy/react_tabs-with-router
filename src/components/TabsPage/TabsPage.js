import React from 'react';

import PropTypes from 'prop-types';

import {
  NavLink,
} from 'react-router-dom';

const TabsPage = ({ id, tabs }) => {
  const { content } = tabs.find(tab => tab.id === id) || {};

  return (
    <div className="tabs-page">
      <h1>Tabs</h1>

      <div className="tabs">
        { tabs.map(tab => (
          <>
            <NavLink
              className="tab link"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </>
        ))
        }
      </div>
      {content}
    </div>
  );
};

TabsPage.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default TabsPage;
