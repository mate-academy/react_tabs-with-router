import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';

import './TabsPage.css';

export const TabsPage = ({ tabs }) => {
  const location = useLocation();
  const match = useRouteMatch();
  const tab = tabs.find(
    tab => `${match.path}/${tab.id}` === location.pathname,
  );

  return (
  <>
    <h2>Tabs</h2>
    <Tabs tabs={tabs} />
    {tab && (
      <p className="app__content">{tab.content}</p>
    )}
  </>
  )
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
