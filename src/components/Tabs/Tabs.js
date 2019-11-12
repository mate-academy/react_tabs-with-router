import React from 'react';
import Tab from '../Tab/Tab';

export default function Tabs({ tabs, match }) {
  return (
    <Tab tabs={tabs} match={match} />
  );
}
