import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

type Props = {
  tab: Tab;
};

const Tab: React.FC<Props> = ({ tab }) => {
  return (
    <div>
      <NavLink
        className="tabs_click"
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </NavLink>

    </div>
  );
};

export default Tab;
