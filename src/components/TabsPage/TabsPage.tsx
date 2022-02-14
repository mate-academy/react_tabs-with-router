import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [tab, setTab] = useState<Tab[]>([]);
  const { tabId } = useParams<{ tabId: string }>();

  useEffect(() => {
    setTab(tabs);
  }, []);

  return (
    <>
      <h1>Tabs Page</h1>

      <div className="tabs is-boxed is-centered">
        <ul>
          {tab.map(item => (
            <li
              key={item.id}
              className={classNames({ 'is-active': item.id === tabId })}
            >
              <NavLink
                to={`/tabs/${item.id}`}
              >
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {tabId ? <Outlet context={tab} /> : <p>Please select a tab</p>}
      </div>
    </>
  );
};
