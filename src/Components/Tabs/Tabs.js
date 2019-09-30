import React from 'react';
import { TabsProps } from '../PropTypes/PropTypes';
import './Tabs.css';

const Tabs = ({ match, tabs }) => (
  <p className="card-text tab-text">
    {tabs.find(item => item.id === match.params.tabId)
      && tabs.find(item => item.id === match.params.tabId).content}
  </p>
);

Tabs.propTypes = TabsProps;

export default Tabs;
