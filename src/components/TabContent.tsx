import React from 'react';
import { Tab } from '../types/Tab';

export const TabContent = ({
  selectedTab,
}: {
  selectedTab: Tab | undefined;
}) => (
  <div className="block" data-cy="TabContent">
    {selectedTab ? selectedTab.content : 'Please select a tab'}
  </div>
);
