import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {
  const activeTab = tabs.find(tab => (tab.id === currentTabId));
  const defaultTabId = tabs[0].id;

  if (!currentTabId) {
    return <Redirect to={`/tabs/${defaultTabId}`} />;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="header">
          React Tabs
          {currentTabId}
        </h1>
        <ul className="tabs">
          {tabs.map(tab => (
            <li className="tab col s3" key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="orange-text"
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <article>
          <h2 className="header">
            {activeTab && activeTab.title}
          </h2>
          {activeTab && activeTab.content}
        </article>
      </div>
    </section>
  );
};
