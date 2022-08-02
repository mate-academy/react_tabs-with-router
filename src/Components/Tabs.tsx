import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <ul className="list tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="list__item"
          >
            <Link to={`/tabs/${tab.id}`}>
              <button
                type="button"
                className={classNames(
                  'button',
                  { 'is-large': tab.id === selectedTab?.id },
                )}
              >
                {tab.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <h1
        className={
          classNames(
            'title',
            'notification',
            'is-large',
            { 'is-danger': !selectedTab?.content })}
      >
        {selectedTab?.content
          ? selectedTab.content
          : 'Please, select a tab'}
      </h1>
    </>
  );
};
