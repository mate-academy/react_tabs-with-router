/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

export const Tabs = ({ tabs, match }) => (
  <div className="tabs">
    {/* <Link to={`${match.url}/${tabs[0].id}`}>{tabs[0].title}</Link>
    <Link to={`${match.url}/${tabs[1].id}`}>{tabs[1].title}</Link>
    <Link to={`${match.url}/${tabs[2].id}`}>{tabs[2].title}</Link> */}
    {tabs.map((tab) => (
      <Link
        to={`${match.url}/${tab.id}`}
        className="tabs__link"
      >
        {tab.title}
      </Link>
    ))}
    {match.params.tabId
      && <p>{tabs.find(tab => tab.id === match.params.tabId).content}</p> }
  </div>
);
