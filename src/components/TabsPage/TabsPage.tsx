import React from 'react';

import { Link, useParams } from 'react-router-dom';

import './TabsPage.scss';

interface Props {
  tabs: Tab[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const active = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabsPage">
      <h1 className="tabsPage__title">
        Tabs Page
      </h1>

      <ul className="tabsPage__tabs">
        {tabs.map(tab => (
          <li
            className="tabsPage__item"
            key={tab.id}
          >
            <Link
              className="tabsPage__button"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      {active && (
        <p className="tabsPage__content">{active.content}</p>
      )}
    </div>
  );
};
