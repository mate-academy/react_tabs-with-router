import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs
    .find(tab => tab.id === tabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('', {
                'is-active': tabId === selectedTab?.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs-page/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        { selectedTab ? selectedTab?.content : 'Please, select a tab' }
      </div>
    </div>
  );
};
