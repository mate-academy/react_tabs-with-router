import React from 'react';
import { TabsPageTypes } from '../../constants/proptypes';
import './TabsPage.scss';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ match, tabs }) => {
  const { content } = tabs.find(tab => tab.id === match.params.id) || {};

  return (
    <>
      <Tabs tabs={tabs} matchId={match.params.id} />
      <p className="tab__text">
        {content}
      </p>
    </>
  );
};

TabsPage.propTypes = TabsPageTypes;

export default TabsPage;
