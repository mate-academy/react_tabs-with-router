import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
  onHandleClick: Function;
};

const Tabs: React.FC<Props> = ({ tabs, currentTabId, onHandleClick }) => {
  const match = useRouteMatch();
  const currentTab = tabs.find((tab: Tab) => tab.id === currentTabId);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab: Tab) => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              className="nav-link"
              to={`${match.path}/${tab.id}`}
              id={tab.id}
              onClick={(event) => onHandleClick(event)}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route
        path="/tabs"
        render={() => (
          <div className="tabcontent">
            <p>{currentTab && currentTab.content}</p>
          </div>
        )}
      />
    </>
  );
};

export default Tabs;
