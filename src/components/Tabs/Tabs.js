import React from 'react';
import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs }) => (
  <ul
    className="nav nav-pills mb-3 justify-content-center"
    id="pills-tab"
    role="tablist"
  >
    {tabs.map((tab, i) => (
      <Tab tab={tab} index={i} />
    ))}
  </ul>
);
