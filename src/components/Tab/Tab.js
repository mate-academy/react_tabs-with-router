import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

function Tab({ match: { params: { currentTabId } }, tabs }) {
  const tab = tabs.find(tab => tab.id === currentTabId);

  return (
    <>
      <nav>
        {tabs.map(tab => (
          <NavLink key={tab.id} to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <p>{tab && tab.content}</p>
    </>
  );
}

export default Tab;
