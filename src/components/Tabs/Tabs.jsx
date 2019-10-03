import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, match }) => {
  const tab = tabs.find(item => item.id === match.params.tabsId);

  return (
    <>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink active to={`/tabs/${tab.id}`}>
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <h2 style={{ marginLeft: '40px' }}>
        {tab && tab.content}
      </h2>
    </>
  );
};

export default Tabs;
