import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
/* eslint-disable */
import { tabs } from './App';
export const TabPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const checkUrl = useMatch('/tabs/:tabId');
  const selectedTabId = checkUrl?.params.tabId || null;

  const find = tabs.find((tab) => tab.id === selectedTabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const handleClick = () => setSelectedTab(tab);

              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={selectedTab.id === tab.id ? 'is-active' : ''}
                  onClick={handleClick}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {find ? (
          <div className="block" data-cy="TabContent">
            {find.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
