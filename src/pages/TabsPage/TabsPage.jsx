import React, { useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Tabs } from '../../components/Tabs';

export const TabsPage = () => {
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
  const match = useRouteMatch();
  const findTab = inputId => tabs.find(({ id }) => inputId === id);
  const tabId = match.params.tabId || '';
  const validator = useMemo(() => findTab(tabId), [tabId]);

  return (
    <>
      <h2 className="subtitle">Tabs page</h2>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                <p>{tab.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {tabId !== '' && validator
        ? (
          <Tabs tabs={tabs} tabId={tabId} onFilterTabs={findTab} />
        )
        : (<p> Select Tab, please</p>)}
    </>
  );
};
