import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Tabs } from '../Tabs/Tabs';
import { tabs } from '../../tabs';

interface MatchParams {
  tabId: string;
}

type Props = RouteComponentProps<MatchParams>;


export const TabsPage: FC<Props> = ({ match }) => {
  return (
    <>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} TabId={match.params.tabId} />
    </>
  );
};
