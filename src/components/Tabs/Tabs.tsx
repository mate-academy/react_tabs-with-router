import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TABS } from '../../constants';
import { TabsList } from '../TabsList/TabsList';

interface Tabs{
  tabId: string;
}

type Props = RouteComponentProps<Tabs>;

export const Tabs: FC<Props> = ({ match }) => (
  <div className="wrapper">
    <h2>Tabs Page</h2>
    <TabsList tabs={TABS} activeTab={match.params.tabId} />
  </div>
);
