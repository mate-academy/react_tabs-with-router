import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': selectedTab?.id === tab.id,
                })}
              >
                <Link
                  to={`../${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {!selectedTab && ('Please select a tab')}
          {selectedTab?.content}
        </div>
      </div>
    </div>
  );
};
