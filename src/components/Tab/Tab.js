import React from 'react';
import { TabsProps } from '../PropTypes/PropTypes';

const Tab = ({ match, tabs }) => (
  <p>
    {tabs.map(tab => (tab.id === match.params.tabId ? tab.content : ''))}
  </p>
);

Tab.propTypes = TabsProps;
export default Tab;
