import React from 'react';
import {
  NavLink, Outlet, useParams,
} from 'react-router-dom';
import './TabsPage.scss';

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div
        className="ButtonsContainer"
      >
        {
          tabs.map(tab => (
            <React.Fragment key={tab.id}>
              <NavLink
                to={tab.id}
                className={
                  tabId === tab.id ? 'TabButton Clicked' : 'TabButton'
                }
              >
                {tab.title}
              </NavLink>
            </React.Fragment>
          ))
        }
        <div
          className="AdditionalSpace"
        >
          <span
            className={
              currentTab ? 'Warning-invisible' : 'Warning'
            }
          >
            Please select a tab
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default TabsPage;
