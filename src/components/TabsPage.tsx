import React from "react";
import { useRouteMatch } from 'react-router-dom';

import { TabItem } from './TabItem';

type Tabs = {
    id: string,
    title: string,
    content: string,
};
const tabs: Array<Tabs> = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

 interface MatchParams {
  tabId: string;
}

export const TabsPage = () => {
  const match = useRouteMatch<MatchParams>('/tabs/:tabId?');
  const tabId = match?.params?.tabId || '1';
  console.log(tabId,"what");
  return (
    <TabItem
    tabs={tabs}
    tabId={tabId}
  />
  )
};
