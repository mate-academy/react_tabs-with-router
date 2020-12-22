import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { TabI } from '../../api/interface';
import './TabPage.scss';

type TabType = {
  tabs: TabI[];
};

interface MatchTab {
  params: {
    tabId: string;
  };
}

export const TabPage: React.FC<TabType> = ({ tabs }) => {
  const match: MatchTab | null = useRouteMatch('/tabs/:tabId?');
  const tabId: string = match?.params.tabId || '0';
  const tabFind: TabI | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <>
      {tabId === '0' ? (<h2>Please select a tab</h2>)
        : (
          <div className="content">
            {tabFind && tabFind.content}
          </div>
        )}
    </>
  );
};
