import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { PageContent, Tab } from './PageContent';

export const TabsPage = (props: { tabs: Array<Tab> }) => {
  const { tabs } = props;
  const params = useParams<{ tabId: string }>();
  const { tabId } = params;
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1>Tabs Page</h1>

      <div>
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            className="button is-small is-primary is-outlined"
            activeClassName="is-link"
          >
            {tab.title}
          </NavLink>
        ))}
      </div>

      <div>
        <PageContent
          selectedTab={selectedTab}
        />
      </div>
    </div>
  );
};
