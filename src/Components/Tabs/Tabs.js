import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabsProps } from '../PropTypes/PropTypes';
import './Tabs.css';

const Tabs = ({ match, tabs }) => {
  const tab = tabs.find(item => item.id === match.params.tabId);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(({ title, id }) => (
          <li className="nav-item" key={id}>
            <NavLink className="nav-link" to={`/tabs/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
      <p className="card-text tab-text">
        {tab && tab.content}
      </p>
    </>
  );
};

Tabs.propTypes = TabsProps;

export default Tabs;
