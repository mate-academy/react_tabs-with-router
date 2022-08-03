import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { pathname } = useLocation();
  const selectedTab = tabs.find(tab => {
    const pathnameArray = pathname.split('/');
    const endPoint = pathnameArray[pathnameArray.length - 1];

    return endPoint === tab.id;
  });

  return (
    <>
      <div className="section">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  data-cy={`${tab.id}`}
                  className={
                    selectedTab?.id === tab.id ? 'is-active' : 'is-success'
                  }
                  key={tab.title}
                >
                  <Link
                    to={`${tab.id}`}
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {selectedTab
          ? (
            <div className="block" data-cy="tab-content">
              {selectedTab.content}
            </div>
          )
          : (
            <div className="block" data-cy="tab-content">
              No tab
            </div>
          )}
      </div>
    </>
  );
};
