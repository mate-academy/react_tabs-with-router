import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div data-cy="Tabs" className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === tabId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isActive,
                })}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
