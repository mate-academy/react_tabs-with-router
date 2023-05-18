import React from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();
  const selectedTabContext = tabs
    .find(tab => tab.id === tabId)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={cn({
                  'is-active': tabId === tab.id,
                })}
                data-cy="Tab"
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContext}
        </div>
      </div>
    </>
  );
};
