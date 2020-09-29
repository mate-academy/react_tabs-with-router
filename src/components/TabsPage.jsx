import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './TabsPage.scss';

export const TabsPage = ({ tabId, tabs }) => {
  const choosenTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      {tabs.map(tab => (
        <NavLink
          activeClassName="active-tab"
          className="tabNav"
          key={tab.id}
          to={`/tabs/${tab.id}`}
        >
          {tab.title}
        </NavLink>
      ))}

      {choosenTab && (
        <p className="content">
          {choosenTab.content}
        </p>
      )}
    </div>
  );
};

TabsPage.propTypes = {
  tabId: PropTypes.number,
  tabs: PropTypes.arrayOf(Object).isRequired,
};

TabsPage.defaultProps = {
  tabId: '',
};
