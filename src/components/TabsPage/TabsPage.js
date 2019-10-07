import React from 'react';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ match, tabs }) => (
  <>
    <h1>Tabs page</h1>
    <Tabs tabs={tabs} match={match} />
  </>
);

export default TabsPage;
