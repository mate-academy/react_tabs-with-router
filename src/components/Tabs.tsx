import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId || '';
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const { title, id } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames(
                  {
                    'is-active': selectedTabId === id,
                  },
                )}
              >
                {selectedTabId === id ? (
                  <Link
                    to="/tabs/"
                  >
                    {title}
                  </Link>
                ) : (
                  <Link
                    key={id}
                    to={`/tabs/${id}`}
                  >
                    {title}
                  </Link>
                )}

              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!selectedTabId.length ? (
          'Please select a tab'
        ) : (
          selectedTab?.content
        )}
      </div>
    </>
  );
};
