import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './TabsPage.scss';

export interface TypeTabs {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
}

export const TabsPage = ({ tabs }: TypeTabs) => {
  const math: {params: {tabId: string}} = useRouteMatch();

  const comparisonTabId = (tabId: string) => {
    return `:${tabId}` === math.params.tabId;
  };

  const tabContent = () => {
    const currentTab = tabs.find(tab => comparisonTabId(tab.id));

    return currentTab ? currentTab.content : 'select tab please :]';
  };

  return (
    <>
      <h1>Tabs with router</h1>

      {tabs.map((tab) => {
        const urlTab = `/tabs/:${tab.id}`;

        return (
          <div className="tabTitle" key={tab.id}>
            <Link
              to={urlTab}
              className={comparisonTabId(tab.id) ? 'activeTab' : ''}
            >
              {tab.title}
            </Link>
          </div>
        );
      })}
      <p className="tabContent">
        {tabContent()}
      </p>
    </>
  );
};
