// import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  const params = useParams();

  const [tabId, setTabId] = useState(params.tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
            >
              {/* <a href="#/">{tab.title}</a> */}
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => setTabId(tab.id)}
              >
                {tab.title}

              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(() => {
          switch (tabId) {
            case 'tab-1':
              return 'Some text 1';
            case 'tab-2':
              return 'Some text 2';
            case 'tab-3':
              return 'Some text 3';
            default:
              return 'Please select a tab';
          }
        })()}
      </div>
    </>
  );
};
