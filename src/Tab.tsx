import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  tab: Tab;
};

const Tab: React.FC<Props> = ({ tab }) => {
  return (
    <>
      <NavLink
        className="tab_link"
        activeClassName="active_link"
        to={`/tabs/${tab.id}`}
      >
        {tab.title}
      </NavLink>

    </>
  );
};


export default Tab;
