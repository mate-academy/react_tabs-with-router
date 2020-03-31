import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';
import { tabs } from '../../constants/api';


interface MatchParams {
  tabId: string;
}

export const TabsPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => (
  <div className="tabs_page">
    <Tabs tabs={tabs} tabId={match.params.tabId} />
  </div>
);
