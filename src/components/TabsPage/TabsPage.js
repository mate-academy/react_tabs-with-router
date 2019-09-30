import React from 'react';
import Tabs from '../Tabs/Tabs';

const TabsPage = (props) => {
  const { tabs } = props;
  
  return(
    <Tabs tabs={tabs} />
  );
};

export default TabsPage;
