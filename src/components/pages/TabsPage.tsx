import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Tabs } from '../Tabs';
import { tabs } from '../../tabs';

interface MatchParams {
  tabId: string;
}

type Props = RouteComponentProps<MatchParams>;


export const TabsPage: FC<Props> = ({ match }) => {
  return (
    <>
      <h2>Tabs Page</h2>
      <Tabs tabs={tabs} activeTab={match.params.tabId} />
    </>
  );
};
