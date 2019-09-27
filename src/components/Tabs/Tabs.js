import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs, currentId }) => {
  const indexElement = parseInt(currentId !== undefined
    ? currentId.replace(/tab-/, '')
    : 0, 10) - 1;

  return (
    <>
      <div className="ui attached tabular menu">
        {tabs.map((tab, i) => (
          <NavLink
            to={`/tabs/${tab.id}`}
            className="item"
            activeClassName="active item"
            key={i}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      {currentId !== undefined && indexElement <= tabs.length && (
        <div className="ui bottom attached segment active tab">
          {tabs[indexElement].content}
        </div>
      )}
    </>
  );
};

export default Tabs;
