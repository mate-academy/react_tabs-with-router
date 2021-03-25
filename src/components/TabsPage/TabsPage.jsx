import React from 'react';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

export function TabsPage() {
  const match = useRouteMatch('/tabs/:tabId?');
  const history = useHistory();
  let { tabId } = match.params;

  if (tabId && !tabs.some(({ id }) => id === tabId)) {
    history.push('/tabs');
    tabId = undefined;
  }

  return (
    <>
      <h1 className="title">Tabs Page</h1>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li
              className={tabId === tab.id ? 'is-active' : ''}
              key={tab.id}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {tabId
        ? <p>{tabs.find(tab => tab.id === tabId).content}</p>
        : <p> Please select a tab </p>
      }
    </>
  );
}
