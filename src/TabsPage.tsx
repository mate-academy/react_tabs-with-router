import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const TabsPage: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => {
  const params = useParams();
  const propmptMsg = (params.tabId !== selectedTab?.id)
    ? 'Please select a tab'
    : null;

  const selectedTabInfo = params.tabId !== selectedTab?.id
    ? 'not yet selected or wrond!'
    : selectedTab?.title;

  return (
    <>
      <h1>Tabs page</h1>
      <p>
        {`Selected Tab is ${selectedTabInfo}`}
      </p>
      <p>
        {propmptMsg}
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
                  onClick={() => onTabSelected(tab)}
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
