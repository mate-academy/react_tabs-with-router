import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tabs } from './Tabs';

interface TabsPage{
  tabId: string;
}

type Props = RouteComponentProps<TabsPage>;

export const TabsPage: FC<Props> = ({ match }) => (
  <>
    <h2>Tabs</h2>
    <Tabs activeTab={match.params.tabId} />
  </>
);
