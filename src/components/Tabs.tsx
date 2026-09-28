import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

function getTabById(tabs: Tab[], id: string | null): Tab | null {
  if (!id) {
    return null;
  }

  return tabs.find(tab => tab.id === id) || null;
}

export const Tabs: React.FC<Props> = React.memo(function Tabs({ tabs }) {
  const activeTab = getTabById(tabs, useParams().tabId || null);

  return (
    <>
      <h1 className="title">{`Tabs page`}</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': activeTab?.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
});
