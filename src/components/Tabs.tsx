import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const findSelectedTab = () => {
    const findedTab = tabs.find(tab => tab.id === tabId);

    return findedTab || null;
  };

  const selectedTab = findSelectedTab();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={classNames(
                    { 'is-active': tabId === tab.id },
                  )}
                >
                  <Link
                    to={`/tabs/${tab.id}`}
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
