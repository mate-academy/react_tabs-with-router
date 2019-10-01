import React from 'react';
import { TabsProps } from '../PropTypes/PropTypes';

const Tabs = ({ match, tabs }) => (
  <p>
    {tabs.find(tab => tab.id === match.params.tabId)
      && tabs.find(tab => tab.id === match.params.tabId).content}
  </p>
);

Tabs.propTypes = TabsProps;
export default Tabs;
