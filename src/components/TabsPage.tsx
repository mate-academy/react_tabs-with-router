import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tabs[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <div className="tabs is-centered is-medium is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              key={item.id}
              className={classNames({ 'is-active': tabId === item.id })}
            >
              <Link to={`/tabs/${item.id}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        <h2>
          {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
        </h2>
      </div>
    </>
  );
};
