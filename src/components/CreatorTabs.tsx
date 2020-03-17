import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { tabs } from '../App';
import { Tabs } from './TabsLink';

type QueryParams = {
  tabsId: string;
};

type Props = RouteComponentProps<QueryParams>;

export const creatorTabs: FC<Props> = ({ match }) => {
  const currentTab = tabs
    .find((tab: TabInterface) => tab.id === match.params.tabsId);

  if (!currentTab) {
    return (
      <p>Tab not found</p>
    );
  }

  return (
    <>
      <Tabs />
      <div className="content">
        {
          currentTab.content
        }
      </div>
    </>
  );
};
