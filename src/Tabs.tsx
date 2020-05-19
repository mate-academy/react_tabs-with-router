import React, { useState, useCallback } from 'react';
import { NavLink, Route } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  currentTabId: string;
};

const Tabs: React.FC<Props> = ({ tabs, currentTabId }) => {

  const [currentTab, setCurrentTab] = useState((tabs.find((tab: Tab) => tab.id === currentTabId) || {}).content);

  const onHandleClick = useCallback(content => {
    setCurrentTab(content);
  }, []);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab: Tab) => (
          <li className="nav-item" key={tab.id}>
            <NavLink
              className="nav-link"
              to={`/tabs/${tab.id}`}
              id={tab.id}
              onClick={() => onHandleClick(tab.content)}
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
            <p>{currentTab}</p>
          </div>
        )}
      />
    </>
  );
};

export default Tabs;
