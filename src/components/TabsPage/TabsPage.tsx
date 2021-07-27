import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './TabsPage.scss';

export interface TypeTabs {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
}

export const TabsPage = ({ tabs }: TypeTabs) => {
  const math: {params: {tabId: string}} | null = useRouteMatch('/tabs/:tabId?');
  console.log(math);

  if (math === null) {
    return (<div>Not found</div>);
  }

  const compareTabId = (tabId: string) => {
    return `${tabId}` === math.params.tabId;
  };

  const tabContent = () => {
    const currentTab = tabs.find(tab => compareTabId(tab.id));

    return currentTab ? currentTab.content : 'select tab please :]';
  };

  return (
    <>
      <h1>Tabs with router</h1>

      {tabs.map((tab) => {
        const urlTab = `/tabs/${tab.id}`;

        return (
          <div className="tabTitle" key={tab.id}>
            <NavLink
              to={urlTab}
              className={compareTabId(tab.id) ? 'activeTab' : ''}
            >
              {tab.title}
            </NavLink>
          </div>
        );
      })}
      <p className="tabContent">
        {tabContent()}
      </p>
    </>
  );
};
