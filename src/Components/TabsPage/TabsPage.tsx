import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = React.memo(() => {
  const match = useMatch('/tabs/:tabId');
  const selectedTabId = match?.params.tabId;

  const getContent = (tabId: string | undefined) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  };

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <NavLink
              to={`/tabs/${tab.id}`}
              className={(navData) => (classNames(
                'nav-link',
                {
                  active: navData.isActive,
                },
              ))}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {selectedTabId ? (
        <h1>{getContent(selectedTabId)}</h1>
      ) : (
        <h1>Please select a tab</h1>
      )}
    </div>
  );
});
