import React from 'react';
import Tabs from '../Tabs/Tabs';
import { TabsPageProps } from '../PropTypes/PropTypes';

const TabsPage = (props) => {
  const { match, tabs } = props;

  return (
    <>
      <Tabs match={match} tabs={tabs} />
    </>
  );
};

TabsPage.propTypes = TabsPageProps;

export default TabsPage;
