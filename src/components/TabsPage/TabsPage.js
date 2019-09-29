import React from 'react';
import Tab from '../Tab/Tab';

function TabsPage(props) {
  const {
    tabs,
    match
  } = props;

  return (
    <div className="tabs">
      <h2>TabsPage</h2>
      <Tab tabs={tabs} match={match} />
    </div>
  );
}

export default TabsPage;
