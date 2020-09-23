import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import './TabsPage.scss';

export const TabsPage = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs">
        {
          tabs.map((tab) => (
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tabs__button"
              activeClassName="tabs__button-selected"
              key={tab.id}
            >
              {tab.title}
            </NavLink>
          ))
        }
      </div>

      {
        !currentTab || (
          <div className="tab">
            {currentTab.content}
          </div>
        )
      }
    </>
  );
};
