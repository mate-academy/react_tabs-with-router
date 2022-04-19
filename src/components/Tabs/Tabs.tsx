import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import './Tabs.scss';

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
        <div>
          {tabs.map(tab => (
            <button
              type="button"
              key={tab.id}
              className={classNames({ 'button my-active': tab.id === tabId })}
            >
              <a href={`#/tabs/${tab.id}`}>
                {tab.title}
              </a>
            </button>
          ))}
        </div>
      </div>
      <article>
        <p className="is-size-4">{currentTab ? `${currentTab.content}` : 'Please select a tab'}</p>
      </article>
    </>
  );
};
