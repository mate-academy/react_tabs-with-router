import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabsPropTypes } from '../../constants/proptypes';

const Tabs = ({ tabs }) => (
  <nav className="ui attached tabular menu">
    {tabs.map(tab => (
      <NavLink to={`/tabs/${tab.id}`} className="item">{tab.title}</NavLink>
    ))}
  </nav>
);

Tabs.propTypes = TabsPropTypes;

export default Tabs;
