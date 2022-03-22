import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import './TabPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs">
        <h1>Tab Page</h1>
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <a href={`#/tabs/${tab.id}`}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <article>
        <p>{currentTab ? `${currentTab.content}` : 'Please select a tab'}</p>
      </article>
    </>
  );
};
