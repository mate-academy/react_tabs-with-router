import React from 'react';
import { NavLink as Link, useParams } from 'react-router-dom';
// import { tabs } from '../../api/tabs';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabsPage">
      <h1 className="tabsPage__tabs">
        A list of tabs
      </h1>
      <h2>
        {!tabId || !activeTab ? 'Please select a tab' : ''}
      </h2>
      <ul className="tabsPage__list">
        {
          tabs.map(tab => (
            <li
              key={tab.id}
              className="tabs__item"
            >
              <Link
                to={`tabs/${tab.id}`}
                className="button"
                // activeClassName="is-active"
              >
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>

      {activeTab && (
        <p>
          {activeTab.content}
        </p>
      )}
    </div>
  );
};
