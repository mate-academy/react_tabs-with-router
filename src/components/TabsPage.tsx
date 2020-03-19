import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tabs } from './Tabs';
import { tabs } from '../tabsList';

interface RouteParams {
  activeTab: string;
}

type Props = RouteComponentProps<RouteParams>;

export const TabsPage: FC<Props> = ({ match }) => {
  return (
    <>
      <h1>Tabs</h1>
      <Tabs
        tabs={tabs}
        activeTab={match.params.activeTab}
      />
    </>
  );
};
