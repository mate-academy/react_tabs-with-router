import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Tabs({ tabs, onTabSelected }) {
  return (
    <>
      <div>
        {tabs.map(item => (
          <NavLink to={`/tabs/${item.id}`} exact>
            <Button
              key={item.title}
              type="submit"
              onClick={() => onTabSelected(item)}
              className="item"
            >
              {item.title}
            </Button>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Tabs;
