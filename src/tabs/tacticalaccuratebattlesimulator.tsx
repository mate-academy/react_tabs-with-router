import React from 'react';
import cn from 'classnames';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface Props {
  Tabs: Tab[];
}

export const Tabss: React.FC<Props> = ({ Tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const selectedTab = Tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {Tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTab ? 'Please select a tab' : selectedTab.content}
      </div>
    </>
  );
};
