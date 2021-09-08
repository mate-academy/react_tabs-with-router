import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, ButtonActive } from '../styled';
import { tabs } from './tabs';

export const TabsPage = ({ match }) => {
  const { tabId } = match.params;

  return (
    <>
      <h1>Tabs Page</h1>
      {tabs.map(tab => (
        tabId === tab.id ? (
          <Link to="/tabs/">
            <ButtonActive
              key={tab.id}
              type="button"
            >
              <h1>{tab.title}</h1>
            </ButtonActive>
          </Link>
        ) : (
          <Link to={`/tabs/${tab.id}`}>
            <Button
              key={tab.id}
              type="button"
            >
              <h1>{tab.title}</h1>
            </Button>
          </Link>
        )
      ))}
      <p>
        {tabId
          ? tabs.find(tab => tab.id === tabId).content
          : 'Please select tab'}
      </p>
    </>
  );
};

TabsPage.propTypes = {
  match: PropTypes.shape().isRequired,
};
