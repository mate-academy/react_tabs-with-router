import React from "react";
import { useRouteMatch } from 'react-router-dom';

import { TabItem } from './TabItem';
import { MatchParams } from '../Types';
import { tabs } from '../api';

export const TabsPage = () => {
  const match = useRouteMatch<MatchParams>('/tabs/:tabId?');
  const tabId = match?.params?.tabId || '1';

  return (
    <TabItem
      tabs={tabs}
      tabId={tabId} 
     />
  )
};
