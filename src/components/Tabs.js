import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs({ tabs, onTabSelected }) {
  return (
    <div>
      {tabs.map(item => (
        <NavLink to={`/tabs/${item.id}`} exact>
          <button
            key={item.title}
            type="submit"
            onClick={() => onTabSelected(item)}
            className="tabsButton"
          >
            {item.title}
          </button>
        </NavLink>
      ))}
    </div>
  );
}

export default Tabs;
