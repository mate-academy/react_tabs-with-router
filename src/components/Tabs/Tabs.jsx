/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

export const Tabs = ({ tabs, match }) => {

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Link to={`tabs/${tab.id}`}>{tab.title}</Link>
      ))}
      {match.params.tabId
        && <p>{tabs.find(tab => tab.id === match.params.tabId).content}</p> }
    </div>
  );
};
