import React from 'react';
import { TabsProps } from '../PropTypes/PropTypes';

const Tab = ({ tabId, tabs }) => (
  <p>
    {tabs.map(tab => (tab.id === tabId ? tab.content : ''))}
  </p>
);

Tab.propTypes = TabsProps;
export default Tab;
