import classNames from 'classnames';
import React, { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  tabs: {
    id: string,
    title: string,
    content: string,
  }[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const findSelectedTab = useCallback(() => (
    tabs.find(tab => tabId === tab.id)?.content || 'Please select a tab'
  ), [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findSelectedTab()}
      </div>
    </>
  );
};
