import { Link, useParams } from 'react-router-dom';
// import { useState } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  const getLinkClass = (currentTabId: string) => classNames({
    'is-active': currentTabId === tabId,
  });

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={getLinkClass(tab.id)}
                data-cy="Tab"
                key={tab.id}
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
          {tabs.find(tab => tab.id === tabId)?.content
          || <p>Please select a tab</p>}
        </div>
      </div>
    </>
  );
};
