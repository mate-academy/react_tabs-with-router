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

  const getContent = (tabId?: string) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  };

  return (
    <div className="section">
      <h1 className="title">Tabs Page</h1>
      <div className="tabs is-boxed">
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id} className="navbar-item">
              <NavLink
                to={`/tabs/${tab.id}`}
                className={(navData) => (classNames(
                  'navbar-item',
                  {
                    'is-active': navData.isActive,
                  },
                ))}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="title" data-cy="tab-content">
        { selectedTabId
          ? (getContent(selectedTabId))
          : ('Please select a tab')}

      </h1>
    </div>
  );
});
