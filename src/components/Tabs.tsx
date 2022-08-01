import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
