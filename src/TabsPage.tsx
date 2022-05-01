import React from 'react';
import { NavLink } from 'react-router-dom';

export const TabsPage: React.FC<Props> = ({
  tabs,
  onTabSelected,
  onTabIdSelected,
  selectedTabId,
  selectedTab,
}) => {
  return (
    <>
      <h1>Tabs page</h1>
      <p>
        Selected tab is
        {' '}
        {!selectedTab ? 'Not yet selected' : selectedTab?.title}
      </p>
      <p>
        {selectedTab?.id !== selectedTabId
          ? 'Please select a tab' : null}
      </p>

      <div className="Container">
        {tabs.map((tab) => (
          <>
            <div
              key={Date.now()}
              className="Tab"
            >
              <button type="button" className="link-button">
                <NavLink
                  key={tab.id}
                  to={`/tabs/${tab.id}`}
                  className={({ isActive }) => (
                    isActive ? 'active' : 'not-active')}
                  onClick={() => {
                    onTabSelected(tab);
                    onTabIdSelected(tab.id);
                  }}
                >
                  {tab.title}
                </NavLink>
              </button>
            </div>
          </>
        ))}
      </div>

      <div className="text">{selectedTab?.content}</div>
    </>
  );
};
