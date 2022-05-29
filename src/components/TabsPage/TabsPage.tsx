import React from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabsPage">
      <h2 className="tabsPage__title is-2">
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
                to={`/tabs/${tab.id}`}
                className="button"
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
