import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Tab } from '../../types/tabTypes';

import './TabPage.scss';

interface Props {
  tabs: Tab[];
}

export const TabPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs</h1>
      <div className="tabs is-centered">
        <ul>
          {tabs.map(tab => (
            <Link
              className={tab.id === tabId
                ? 'tabs__link tabs__link--selected' : 'tabs__link'}
              key={tab.id}
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </Link>
          ))}
        </ul>
      </div>
      <p className="tab__text">
        {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
      </p>
    </>
  );
};
