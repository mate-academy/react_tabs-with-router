import classNames from 'classnames';
import React from 'react';
import { useMemo } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();

  const tabs = useMemo(() => {
    return [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ];
  }, []);

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            const { id, title } = item;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({
                  'is-active': id === tabId,
                })}
              >
                <Link to={`/tabs/${id}`}> {title} </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
      <Outlet />
    </>
  );
};
