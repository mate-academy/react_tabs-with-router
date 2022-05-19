import React, { useMemo } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import classNames from 'classnames';

import tabs from '../api/tabs.json';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const textContent = useMemo(() => {
    return tabs.find(tab => tab.id === tabId)?.content;
  }, [tabId]);

  return (
    <>
      <h2 className="title is-3">Tabs page</h2>
      <div className="tabs is-large is-boxed is-centered">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames(
                'is-tab', { 'is-active': tabId === tab.id },
              )}
            >
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <p className="subtitle is-4">
          {textContent
          || <span style={{ color: '#cc0f35' }}>Please select a tab</span>}
        </p>
      </div>
    </>
  );
};
