import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs">
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
